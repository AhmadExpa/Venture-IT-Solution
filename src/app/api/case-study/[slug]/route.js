import dbConnect from "@/lib/dbConnect";
import CaseStudy from "@/models/CaseStudy";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  await dbConnect();
  const { slug } = await context.params;
  console.log(slug);
  try {
    const caseStudy = await CaseStudy.findOne({ slug }).lean();
    if (!caseStudy) {
      return NextResponse.json(
        { error: "case study not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(caseStudy);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
