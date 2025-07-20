import { NextResponse } from 'next/server';
import { getContactSubmissions } from '@/lib/contactFormActions';
import dbConnect from '@/lib/dbConnect';

export async function GET() {
  await dbConnect();
  
  try {
    const submissions = await getContactSubmissions();
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching submissions' },
      { status: 500 }
    );
  }
}