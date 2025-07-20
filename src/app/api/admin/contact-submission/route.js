import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ContactSubmission from "@/models/ContactSubmission";

export async function GET() {
  await dbConnect();

  try {
    const submissions = await ContactSubmission.find()
      .sort({ submittedAt: -1 })
      .lean();
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching submissions" },
      { status: 500 }
    );
  }
}
