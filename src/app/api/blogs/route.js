import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";

export async function GET() {
  await dbConnect();
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
