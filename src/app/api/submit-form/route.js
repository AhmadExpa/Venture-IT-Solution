import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import FormSubmission from "@/models/FormSubmission";
import formidable from "formidable";
import { Readable } from "stream";
import { uploadToS3 } from "@/lib/s3Upload"; // Make sure you have this function ready
import { sendEmail } from "@/lib/sendMail";

export const config = {
  api: {
    bodyParser: false,
  },
};

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

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(nodeReq, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const fileArray = Array.isArray(files.files) ? files.files : [files.files];
    const processedFiles = await Promise.all(
      fileArray.filter(Boolean).map(async (file) => {
        const randomName = `${Date.now()}-${file.originalFilename}`;
        const uploaded = await uploadToS3(
          { ...file, folder: "submissions" },
          `submissions/${randomName}`
        );
        return uploaded;
      })
    );

    const flattenedFields = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] : value,
      ])
    );

    const submission = new FormSubmission({
      ...flattenedFields,
      selectedSolutions: JSON.parse(flattenedFields.selectedSolutions || "[]"),
      budget: Number(flattenedFields.budget),
      sendNDA: flattenedFields.sendNDA === "true",
      callASAP: flattenedFields.callASAP === "true",
      files: processedFiles,
    });

    await submission.save();
    const userEmail = flattenedFields.businessEmail;
    const userPhone = flattenedFields.phoneNumber;
    const userFullName = `${flattenedFields.firstName} ${flattenedFields.lastName}`;
    // Send email -------------------------------------------------------------
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
  <p><strong>Selected Solutions:</strong> ${
    flattenedFields.selectedSolutions || []
  }</p>
  <p><strong>Call ASAP:</strong> ${flattenedFields.callASAP}</p>
  <p><strong>Send NDA:</strong> ${flattenedFields.sendNDA}</p>
`;

    await Promise.all([
      sendEmail({
        to: userEmail,
        subject: "Venture IT - We Received Your Submission",
        html: userEmailHtml,
      }),
      sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Project Estimate Submission Received",
        html: adminEmailHtml,
      }),
    ]);
    // Send email -------------------------------------------------------------
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
