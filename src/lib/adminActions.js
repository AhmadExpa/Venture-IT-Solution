import dbConnect from "./dbConnect";
import BlogPost from "@/models/BlogPost";
import FormSubmission from "@/models/FormSubmission";
import User from "@/models/User";

export async function getDashboardStats() {
  await dbConnect();

  const now = new Date();
  const oneWeekAgo = new Date(now);
  oneWeekAgo.setDate(now.getDate() - 7);

  const [blogCount, submissionCount, userCount] = await Promise.all([
    BlogPost.countDocuments(),
    FormSubmission.countDocuments(),
    User.countDocuments(),
  ]);

  const [prevBlogCount, prevSubmissionCount, prevUserCount] = await Promise.all(
    [
      BlogPost.countDocuments({ createdAt: { $lt: oneWeekAgo } }),
      FormSubmission.countDocuments({ createdAt: { $lt: oneWeekAgo } }),
      User.countDocuments({ createdAt: { $lt: oneWeekAgo } }),
    ]
  );

  const blogChange = calculateChange(prevBlogCount, blogCount);
  const submissionChange = calculateChange(
    prevSubmissionCount,
    submissionCount
  );
  const userChange = calculateChange(prevUserCount, userCount);

  const traffic = blogCount + submissionCount + userCount; // Mock metric
  const trafficChange = calculateChange(
    prevBlogCount + prevSubmissionCount + prevUserCount,
    traffic
  );

  return {
    blogCount,
    submissionCount,
    userCount,
    traffic,
    blogChange,
    submissionChange,
    userChange,
    trafficChange,
    recentSubmissions: await FormSubmission.find()
      .sort({ createdAt: -1 })
      .limit(5),
    recentBlogs: await BlogPost.find().sort({ createdAt: -1 }).limit(5),
  };
}

function calculateChange(previous, current) {
  if (previous === 0) return current > 0 ? 100 : 0;
  return Math.round(((current - previous) / previous) * 100);
}
