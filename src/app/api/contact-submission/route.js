import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ContactSubmission from "@/models/ContactSubmission";
import { sendEmail } from "@/lib/sendMail";

/**
 * Verify Google reCAPTCHA v2 (checkbox) on the server
 */
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

  const data = await res.json().catch(() => ({}));
  return { ok: !!data.success, details: data };
}

export async function POST(request) {
  await dbConnect();

  try {
    // pull client IP if your proxy/front sets these
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    // token comes from the client after the checkbox is checked
    const { firstName, lastName, email, message, token } = await request.json();

    // basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // require captcha token and validate with Google before doing anything expensive
    const captcha = await verifyRecaptchaV2(token, ip);
    if (!captcha.ok) {
      return NextResponse.json(
        { message: "Captcha verification failed", details: captcha.details },
        { status: 400 }
      );
    }

    // persist to DB
    const newSubmission = new ContactSubmission({
      firstName,
      lastName,
      email,
      message,
      submittedAt: new Date(),
    });

    await newSubmission.save();

    // emails (user + admin)
    const userEmailHtml = `
      <p>Dear ${firstName} ${lastName},</p>
      <p>Thank you for contacting Venture IT Solutions! We have received your message and will get back to you soon.</p>
      <p><strong>Your Message:</strong></p>
      <p>${message}</p>
      <p>Best regards,<br/>The Venture IT Team</p>
    `;

    const adminEmailHtml = `
      <p>You have a new contact form submission:</p>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    `;

    await Promise.all([
      sendEmail({
        to: email,
        subject: "Venture IT - We Received Your Submission",
        html: userEmailHtml,
      }),
      process.env.ADMIN_EMAIL
        ? sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: "New Contact Form Submission",
            html: adminEmailHtml,
          })
        : Promise.resolve(),
    ]);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error("Form submission error:", e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
