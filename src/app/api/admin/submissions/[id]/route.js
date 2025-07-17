import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import FormSubmission from "@/models/FormSubmission";
import path from "path";
import fs from "fs";

export async function GET(req, context) {
  await dbConnect();
  try {
    const { id } = await context.params;
    const submission = await FormSubmission.findById(id);
    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(submission);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
export async function DELETE(request, context) {
  await dbConnect();
  const { id } = await context.params;

  try {
    const submission = await FormSubmission.findById(id);
    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    // Delete attached files
    submission.files?.forEach((file) => {
      const fullPath = path.join(process.cwd(), "public", file.path);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    });

    await FormSubmission.findByIdAndDelete(id);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Deletion error:", error);
    return NextResponse.json(
      { error: "Failed to delete submission", details: error.message },
      { status: 500 }
    );
  }
}
