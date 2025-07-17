import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import { Readable } from "stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to convert Web Request to Node-compatible req
async function getNodeRequest(webRequest) {
  const body = await webRequest.arrayBuffer();
  const buffer = Buffer.from(body);
  const stream = Readable.from(buffer);

  const headers = {};
  webRequest.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  // Ensure content-length is passed correctly
  headers["content-length"] = buffer.length.toString();

  return Object.assign(stream, {
    headers,
    method: webRequest.method,
    url: "", // Required by formidable but not used
  });
}

export async function POST(webRequest) {
  await dbConnect();

  const uploadDir = path.join(process.cwd(), "public/blogs");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    multiples: true,
    uploadDir,
    keepExtensions: true,
  });

  try {
    const nodeReq = await getNodeRequest(webRequest);

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(nodeReq, (err, fields, files) => {
        if (err) reject(err);
        console.log("Parsed files:", files); // <-- see if any files are detected
        resolve({ fields, files });
      });
    });

    const fieldName = "images"; // Match frontend field name
    const fileArray = files[fieldName]
      ? Array.isArray(files[fieldName])
        ? files[fieldName]
        : [files[fieldName]]
      : [];
    const processedFiles = fileArray
      .filter((file) => !!file)
      .map((file) => ({
        name: file.originalFilename,
        path: `/blogs/${path.basename(file.filepath)}`,
        size: file.size,
        type: file.mimetype,
      }));

    const flattenedFields = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] : value,
      ])
    );

    const blog = new BlogPost({
      title: flattenedFields.title,
      slug: flattenedFields.slug,
      excerpt: flattenedFields.excerpt,
      content: flattenedFields.content,
      images: processedFiles,
    });
    await blog.save();

    return NextResponse.json({ success: true }, { status: 201 });
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
