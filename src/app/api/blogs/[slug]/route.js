import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";

export async function GET(req, context) {
  await dbConnect();
  const { slug } =  await context.params;
  // console.log(slug);
  try {
    const blog = await BlogPost.findOne({ slug }).lean();
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
