import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ContactSubmission from "@/models/ContactSubmission";
import { sendEmail } from "@/lib/sendMail";

export async function POST(request) {
  await dbConnect();

  try {
    const { firstName, lastName, email, message } = await request.json();

    // Validate input
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to database
    const newSubmission = new ContactSubmission({
      firstName,
      lastName,
      email,
      message,
      submittedAt: new Date(),
    });

    await newSubmission.save();

    // Send confirmation email --------------------------------------------------

    // Send confirmation to user
    const userEmailHtml = `
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for contacting Venture IT Solutions! We have received your message and will get back to you soon.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br/>The Venture IT Team</p>
      `;

    // Send notification to admin
    const adminEmailHtml = `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `;

    // Send both emails in parallel
    await Promise.all([
      sendEmail({
        to: email,
        subject: "Venture IT - We Received Your Submission",
        html: userEmailHtml,
      }),
      sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact Form Submission",
        html: adminEmailHtml,
      }),
    ]);

    // Send confirmation email --------------------------------------------------

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
