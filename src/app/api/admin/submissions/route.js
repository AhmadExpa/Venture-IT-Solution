import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import FormSubmission from '@/models/FormSubmission';

export async function GET() {
  await dbConnect();
  try {
    const submissions = await FormSubmission.find().sort({ createdAt: -1 });
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    );
  }
}