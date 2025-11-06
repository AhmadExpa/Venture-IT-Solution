import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import FormSubmission from "@/models/FormSubmission";
import formidable from "formidable";
import { Readable } from "stream";
import { uploadToS3 } from "@/lib/s3Upload";
import { sendEmail } from "@/lib/sendMail";

export const config = {
  api: {
    bodyParser: false,
  },
};

// --- reCAPTCHA v2 Checkbox server verification ---
async function verifyRecaptchaV2(token, ip) {
  if (!token) return { ok: false, reason: "missing-token" };

  const params = new URLSearchParams();
  params.append("secret", process.env.RECAPTCHA_SECRET_KEY || "");
  params.append("response", token);
  if (ip) params.append("remoteip", ip);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  // If Google ever hiccups, fail closed
  if (!res.ok) {
    return { ok: false, reason: "recaptcha-unreachable" };
  }

  const data = await res.json().catch(() => ({}));
  return { ok: !!data.success, details: data };
}

async function getNodeRequest(webRequest) {
  const body = await webRequest.arrayBuffer();
  const buffer = Buffer.from(body);
  const stream = Readable.from(buffer);

  const headers = {};
  webRequest.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  headers["content-length"] = buffer.length.toString();

  return Object.assign(stream, {
    headers,
    method: webRequest.method,
    url: "",
  });
}

export async function POST(webRequest) {
  await dbConnect();

  const form = formidable({ multiples: true, keepExtensions: true });

  try {
    const nodeReq = await getNodeRequest(webRequest);

    // Parse the multipart form (files are parsed to tmp, but we won't upload until captcha passes)
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(nodeReq, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    // Normalize fields (formidable often returns arrays)
    const flattenedFields = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] : value,
      ])
    );

    // --- CAPTCHA: verify BEFORE any uploads/DB writes ---
    const ip =
      webRequest.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      webRequest.headers.get("x-real-ip") ||
      undefined;

    const token = flattenedFields.token;
    const captcha = await verifyRecaptchaV2(token, ip);
    if (!captcha.ok) {
      return NextResponse.json(
        {
          error: "Captcha verification failed",
          details: captcha.details || captcha.reason,
        },
        { status: 400 }
      );
    }

    // --- Minimal input validation (optional but sane) ---
    const required = [
      "businessEmail",
      "companyName",
      "firstName",
      "lastName",
      "phoneNumber",
      "foundUs",
      "partnershipType",
      "projectDetails",
    ];
    const missing = required.filter((k) => !flattenedFields[k]);
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // --- Files: upload AFTER captcha passes ---
    const rawFiles = files?.files;
    const asArray =
      Array.isArray(rawFiles) ? rawFiles : rawFiles ? [rawFiles] : [];
    const processedFiles = await Promise.all(
      asArray.map(async (file) => {
        const randomName = `${Date.now()}-${file.originalFilename}`;
        const uploaded = await uploadToS3(
          { ...file, folder: "submissions" },
          `submissions/${randomName}`
        );
        return uploaded;
      })
    );

    // --- Safe parse for JSON-ish fields ---
    let parsedSolutions = [];
    try {
      parsedSolutions = JSON.parse(
        flattenedFields.selectedSolutions || "[]"
      );
      if (!Array.isArray(parsedSolutions)) parsedSolutions = [];
    } catch {
      parsedSolutions = [];
    }

    // --- Persist to DB ---
    const submission = new FormSubmission({
      ...flattenedFields,
      selectedSolutions: parsedSolutions,
      budget: Number(flattenedFields.budget),
      sendNDA: String(flattenedFields.sendNDA) === "true",
      callASAP: String(flattenedFields.callASAP) === "true",
      files: processedFiles,
      submittedAt: new Date(),
    });

    await submission.save();

    // --- Emails ---
    const userEmail = flattenedFields.businessEmail;
    const userPhone = flattenedFields.phoneNumber;
    const userFullName = `${flattenedFields.firstName} ${flattenedFields.lastName}`.trim();

    const userEmailHtml = `
      <h2>Thank you for contacting Venture IT Solutions</h2>
      <p>We have received your request and will get back to you shortly.</p>
      <p><strong>Name:</strong> ${userFullName || "-"}<br/>
      <strong>Email:</strong> ${userEmail}<br/>
      <strong>Phone:</strong> ${userPhone || "-"}</p>
    `;

    const adminEmailHtml = `
      <h2>New Project Estimate Submission</h2>
      <p><strong>Name:</strong> ${userFullName || "-"}<br/>
      <strong>Email:</strong> ${userEmail}<br/>
      <strong>Phone:</strong> ${userPhone || "-"}</p>
      <p><strong>Budget:</strong> ${flattenedFields.budget}K</p>
      <p><strong>Selected Solutions:</strong> ${parsedSolutions.join(", ")}</p>
      <p><strong>Call ASAP:</strong> ${String(flattenedFields.callASAP)}</p>
      <p><strong>Send NDA:</strong> ${String(flattenedFields.sendNDA)}</p>
    `;

    await Promise.all([
      sendEmail({
        to: userEmail,
        subject: "Venture IT - We Received Your Submission",
        html: userEmailHtml,
      }),
      process.env.ADMIN_EMAIL
        ? sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: "New Project Estimate Submission Received",
            html: adminEmailHtml,
          })
        : Promise.resolve(),
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
