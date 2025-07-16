import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  name: String,
  path: String,
  size: String,
  type: String
});

const FormSubmissionSchema = new mongoose.Schema({
  businessEmail: String,
  companyName: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  foundUs: String,
  partnershipType: String,
  projectDetails: String,
  selectedSolutions: [String],
  budget: Number,
  files: [FileSchema],
  sendNDA: Boolean,
  callASAP: Boolean,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.FormSubmission || 
  mongoose.model("FormSubmission", FormSubmissionSchema);