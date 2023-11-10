import { NextResponse } from "next/server";

let studentsData = [];

export async function GET() {
  return NextResponse.json({ studentsData }, { status: 200 });
}
export async function POST(req, res) {
  const data = await req.json();
  studentsData.push(data);
  console.log("data ", data);

  return NextResponse.json(data);
}
