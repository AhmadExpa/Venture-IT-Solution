import { NextResponse } from 'next/server';
import ContactSubmission from '@/models/ContactSubmission';
import dbConnect from '@/lib/dbConnect';

export async function GET(request, { params }) {
  await dbConnect();
  
  try {
    const submission = await ContactSubmission.findById(params.id);
    if (!submission) {
      return NextResponse.json(
        { message: 'Submission not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(submission);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching submission' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  
  try {
    await ContactSubmission.findByIdAndDelete(params.id);
    return NextResponse.json(
      { message: 'Submission deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error deleting submission' },
      { status: 500 }
    );
  }
}