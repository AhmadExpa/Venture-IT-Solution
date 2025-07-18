import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import FormSubmission from "@/models/FormSubmission";
import formidable from "formidable";
import { Readable } from "stream";
import { uploadToS3 } from "@/lib/s3Upload"; // Make sure you have this function ready

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
        resolve({ fields, files });
      });
    });

    const fileArray = Array.isArray(files.files) ? files.files : [files.files];
    const processedFiles = await Promise.all(
      fileArray.filter(Boolean).map(async (file) => {
        const randomName = `${Date.now()}-${file.originalFilename}`;
        const uploaded = await uploadToS3(
          { ...file, folder: "submissions" },
          `submissions/${randomName}`
        );
        return uploaded;
      })
    );

    const flattenedFields = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] : value,
      ])
    );

    const submission = new FormSubmission({
      ...flattenedFields,
      selectedSolutions: JSON.parse(flattenedFields.selectedSolutions || "[]"),
      budget: Number(flattenedFields.budget),
      sendNDA: flattenedFields.sendNDA === "true",
      callASAP: flattenedFields.callASAP === "true",
      files: processedFiles,
    });

    await submission.save();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
