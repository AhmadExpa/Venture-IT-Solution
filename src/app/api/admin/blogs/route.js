import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";
import formidable from "formidable";
import { Readable } from "stream";
import { uploadToS3 } from "@/lib/s3Upload";
import fs from "fs";
import crypto from "crypto";
import path from "path";

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
        else resolve({ fields, files });
      });
    });

    const fileArray = Array.isArray(files.images)
      ? files.images
      : files.images
      ? [files.images]
      : [];

    const uploadedImages = [];
    for (const file of fileArray) {
      const ext = path.extname(file.originalFilename || file.filepath);
      const randomName =
        crypto.randomBytes(16).toString("hex").replace(/\s+/g, "-") + ext;

      const uploaded = await uploadToS3(file, randomName); // 👈 pass random name
      fs.unlinkSync(file.filepath);
      uploadedImages.push(uploaded);
    }

    const flat = (f) => (Array.isArray(f) ? f[0] : f);
    const blog = new BlogPost({
      title: flat(fields.title),
      slug: flat(fields.slug),
      excerpt: flat(fields.excerpt),
      content: flat(fields.content),
      images: uploadedImages,
    });

    await blog.save();
    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}

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
