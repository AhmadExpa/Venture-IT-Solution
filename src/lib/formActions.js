import dbConnect from "./dbConnect";
import FormSubmission from "@/models/FormSubmission";

// Connect to the database
dbConnect();

/**
 * Fetches all form submissions from the database
 * @returns {Promise<Array>} Array of form submissions
 */
export async function getSubmissions() {
  try {
    const submissions = await FormSubmission.find({}).sort({ createdAt: -1 });
    return submissions;
  } catch (error) {
    console.error("Error fetching submissions:", error);
    throw new Error("Failed to fetch form submissions");
  }
}

/**
 * Fetches a single form submission by ID
 * @param {string} id - The ID of the submission to fetch
 * @returns {Promise<Object>} The form submission object
 */
export async function getSubmissionById(id) {
  try {
    const submission = await FormSubmission.findById(id);
    if (!submission) {
      throw new Error("Submission not found");
    }
    return submission;
  } catch (error) {
    console.error(`Error fetching submission ${id}:`, error);
    throw new Error(`Failed to fetch submission: ${error.message}`);
  }
}

/**
 * Deletes a form submission
 * @param {string} id - The ID of the submission to delete
 * @returns {Promise<Object>} The deletion result
 */
export async function deleteSubmission(id) {
  try {
    const result = await FormSubmission.findByIdAndDelete(id);
    if (!result) {
      throw new Error("Submission not found");
    }
    return result;
  } catch (error) {
    console.error(`Error deleting submission ${id}:`, error);
    throw new Error(`Failed to delete submission: ${error.message}`);
  }
}