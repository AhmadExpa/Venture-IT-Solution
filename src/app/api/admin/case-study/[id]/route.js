import { NextResponse } from "next/server";
import formidable from "formidable";
import { Readable } from "stream";
import dbConnect from "@/lib/dbConnect";
import CaseStudy from "@/models/CaseStudy";
import { uploadToS3, deleteFromS3 } from "@/lib/s3Upload";
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
  return Object.assign(stream, { headers, method: webRequest.method, url: "" });
}

function parseForm(request) {
  const form = formidable({ multiples: true, keepExtensions: true });
  return new Promise((resolve, reject) => {
    form.parse(request, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function PUT(req, context) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const nodeReq = await getNodeRequest(req);
    const { fields, files } = await parseForm(nodeReq);

    const blog = await CaseStudy.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Delete selected images from S3
    if (fields.imagesToDelete) {
      const imagesToDelete = JSON.parse(fields.imagesToDelete[0]);
      for (const imageId of imagesToDelete) {
        const img = blog.images.find((i) => i._id.toString() === imageId);
        if (img?.path) {
          await deleteFromS3(img.path);
        }
      }
      blog.images = blog.images.filter(
        (i) => !imagesToDelete.includes(i._id.toString())
      );
    }

    // Preserve existing images
    if (fields.existingImages) {
      const existingImages = Array.isArray(fields.existingImages)
        ? fields.existingImages
        : [fields.existingImages];
      blog.images = [];
      for (const imgStr of existingImages) {
        const img = JSON.parse(imgStr);
        if (img._id) blog.images.push(img);
      }
    }

    // Upload new images to S3
    const fileArray = Array.isArray(files.images)
      ? files.images
      : files.images
      ? [files.images]
      : [];
    const newImages = [];
    for (const file of fileArray) {
      const ext = path.extname(file.originalFilename || file.filepath);
      const randomName =
        crypto.randomBytes(16).toString("hex").replace(/\s+/g, "-") + ext;

      const uploaded = await uploadToS3(file, randomName); // 👈 pass random name
      fs.unlinkSync(file.filepath);
      newImages.push(uploaded);
    }
    blog.images = [...blog.images, ...newImages];

    // Update other fields
    const flat = (f) => (Array.isArray(f) ? f[0] : f);
    blog.title = flat(fields.title) || blog.title;
    blog.slug = flat(fields.slug) || blog.slug;
    blog.excerpt = flat(fields.excerpt) || blog.excerpt;
    blog.content = flat(fields.content) || blog.content;
    blog.updatedAt = new Date();

    await blog.save();
    return NextResponse.json(blog);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Update failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req, context) {
  await dbConnect();
  const { id } = await context.params;
  try {
    const blog = await CaseStudy.findById(id);
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

export async function DELETE(req, context) {
  await dbConnect();
  const { id } = await context.params;
  try {
    const blog = await CaseStudy.findByIdAndDelete(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    for (const img of blog.images) {
      await deleteFromS3(img.path);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
