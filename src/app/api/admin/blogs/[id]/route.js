import { writeFile, unlink } from "fs/promises";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import formidable from "formidable";
import { Readable } from "stream";
import dbConnect from "@/lib/dbConnect";
import BlogPost from "@/models/BlogPost";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Convert NextRequest to Node-compatible request
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

// Parse with formidable
function parseForm(request) {
  const uploadDir = path.join(process.cwd(), "public/blogs");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    multiples: false,
    uploadDir,
    keepExtensions: true,
  });

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

    const blog = await BlogPost.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Process image deletions
    if (fields.imagesToDelete) {
      try {
        const imagesToDelete = JSON.parse(fields.imagesToDelete[0]);
        for (const imageId of imagesToDelete) {
          const img = blog.images.find((i) => i._id.toString() === imageId);
          if (img?.path) {
            const imgPath = path.join(process.cwd(), "public", img.path);
            try {
              await unlink(imgPath);
              console.log(`Deleted image: ${imgPath}`);
            } catch (unlinkErr) {
              console.error("Error deleting image:", unlinkErr);
            }
          }
        }
        blog.images = blog.images.filter(
          (i) => !imagesToDelete.includes(i._id.toString())
        );
      } catch (err) {
        console.error("Error processing image deletions:", err);
      }
    }

    // Process existing images
    if (fields.existingImages) {
      try {
        const existingImages = Array.isArray(fields.existingImages)
          ? fields.existingImages
          : [fields.existingImages];

        blog.images = [];
        for (const imgStr of existingImages) {
          try {
            const img = JSON.parse(imgStr);
            if (img._id) blog.images.push(img);
          } catch (parseErr) {
            console.error("Error parsing existing image:", parseErr);
          }
        }
      } catch (err) {
        console.error("Error processing existing images:", err);
      }
    }

    // Process new images
    let newImages = [];
    const fileArray = files.images
      ? Array.isArray(files.images)
        ? files.images
        : [files.images]
      : [];

    for (const file of fileArray) {
      if (file.filepath) {
        try {
          const fileName = `${Date.now()}-${file.originalFilename}`;
          const newPath = path.join(process.cwd(), "public/blogs", fileName);

          // Create directory if it doesn't exist
          const dir = path.dirname(newPath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }

          await fs.promises.copyFile(file.filepath, newPath);
          await fs.promises.unlink(file.filepath); // <-- remove temp file
          newImages.push({
            name: file.originalFilename,
            path: `/blogs/${fileName}`,
            size: file.size,
            type: file.mimetype,
          });
        } catch (fileErr) {
          console.error("Error processing new image:", fileErr);
        }
      }
    }

    // Update images array
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
    const blog = await BlogPost.findById(id);
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
    const blog = await BlogPost.findByIdAndDelete(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Delete image
    if (blog.images) {
      for (const img of blog.images) {
        const imgPath = path.join(process.cwd(), "public", img.path);
        try {
          await unlink(imgPath);
        } catch {
          console.error("Error deleting image:", imgPath);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
