import dbConnect from "@/lib/dbConnect";
import CaseStudy from "@/models/CaseStudy";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const caseStudies = await CaseStudy.find().sort({ createdAt: -1 });
    return NextResponse.json(caseStudies);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
