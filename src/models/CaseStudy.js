import mongoose from "mongoose";
const FileSchema = new mongoose.Schema({
  name: String,
  path: String,
  size: String,
  type: String,
});
const CaseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: String,
  images: [FileSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.CaseStudy ||
  mongoose.model("CaseStudy", CaseStudySchema);
