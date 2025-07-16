import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env.local" }); // ← fixed relative path

if (!process.env.MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is missing from .env.local");
}

import { hashPassword } from "../src/lib/auth.js";
import User from "../src/models/User.js";

async function createAdmin() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is missing from .env.local");
  }

  await mongoose.connect(MONGODB_URI);

  const email = "admin@ventureit.com";
  const password = "admin123";
  const hashed = await hashPassword(password);

  const existing = await User.findOne({ email });
  if (existing) {
    console.log("⚠️ Admin already exists");
  } else {
    await User.create({ email, password: hashed });
    console.log("✅ Admin user created successfully");
  }

  await mongoose.disconnect();
}

createAdmin();
