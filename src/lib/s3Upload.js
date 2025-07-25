import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import fs from "fs";

const s3 = new S3Client({
  region: process.env.MY_AWS_REGION,
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY,
    secretAccessKey: process.env.MY_AWS_SECRET_KEY,
  },
});

export async function uploadToS3(file, filename) {
  const fileStream = fs.createReadStream(file.filepath);
  const bucket = process.env.MY_AWS_BUCKET;
  const uploadParams = {
    Bucket: bucket,
    Key: `${filename}`, // 💡 optional folder
    Body: fileStream,
    ContentType: file.mimetype,
  };

  await s3.send(new PutObjectCommand(uploadParams));

  return {
    name: filename,
    path: `https://${bucket}.s3.${process.env.MY_AWS_REGION}.amazonaws.com/${filename}`,
    size: file.size,
    type: file.mimetype,
  };
}
export async function deleteFromS3(url) {
  const bucket = process.env.MY_AWS_BUCKET;
  const key = url.split(`amazonaws.com/`)[1];

  if (!key) return;

  const deleteParams = {
    Bucket: bucket,
    Key: key,
  };

  await s3.send(new DeleteObjectCommand(deleteParams));
}
