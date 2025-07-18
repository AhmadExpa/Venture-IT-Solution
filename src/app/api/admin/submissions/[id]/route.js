import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import FormSubmission from "@/models/FormSubmission";
import { deleteFromS3 } from "@/lib/s3Upload";

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

    // Delete attached files from S3
    await Promise.all(
      (submission.files || []).map((file) => deleteFromS3(file.path))
    );

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
