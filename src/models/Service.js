import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: {
    type: String,
    required: true,
    unique: true,
    enum: [
      "development",
      "devops-automation",
      "data-engineering",
      "artificial-intelligence",
      "security",
      "cloude-infrastructure",
      "digital-transformation",
    ],
  },
  mainHeading: { type: String, required: true },
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  sections: [
    {
      id: { type: String, required: true },
      heading: { type: String, required: true },
      paragraph: { type: String },
      paragraph2: { type: String },
      paragraph3: { type: String },
      path: { type: String, required: true },
    },
  ],
});

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default Service;
