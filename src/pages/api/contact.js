
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { fullname, email, subject, message } = data;
    if (!fullname || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


