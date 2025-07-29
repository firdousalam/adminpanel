import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';

export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectDB();
  const user = await User.create(body);
  return NextResponse.json(user, { status: 201 });
}