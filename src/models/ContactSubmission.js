import mongoose from 'mongoose';

const contactSubmissionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactSubmission = 
  mongoose.models.ContactSubmission || 
  mongoose.model('ContactSubmission', contactSubmissionSchema);

export default ContactSubmission;