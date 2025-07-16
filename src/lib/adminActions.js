import dbConnect from "./dbConnect"
import BlogPost from "@/models/BlogPost"
import FormSubmission from "@/models/FormSubmission"
import User from "@/models/User"

export async function getDashboardStats() {
  await dbConnect()
  
  const [blogCount, submissionCount, userCount] = await Promise.all([
    BlogPost.countDocuments(),
    FormSubmission.countDocuments(),
    User.countDocuments()
  ])
  
  // Mock data for demonstration
  return {
    blogCount,
    submissionCount,
    userCount,
    traffic: 24,
    blogChange: 12,
    submissionChange: -3,
    userChange: 5,
    trafficChange: 8,
    recentSubmissions: await FormSubmission.find().sort({ createdAt: -1 }).limit(5),
    recentBlogs: await BlogPost.find().sort({ createdAt: -1 }).limit(5)
  }
}