import ContactSubmission from '@/models/ContactSubmission';
import dbConnect from '@/lib/dbConnect';

export const getContactSubmissions = async () => {
  await dbConnect();
  return await ContactSubmission.find().sort({ submittedAt: -1 }).lean();
};

export const getContactSubmissionById = async (id) => {
  await dbConnect();
  return await ContactSubmission.findById(id).lean();
};

export const deleteContactSubmission = async (id) => {
  await dbConnect();
  return await ContactSubmission.findByIdAndDelete(id);
};