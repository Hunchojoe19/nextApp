import { NextResponse } from "next/server";

let teachersData = [];

export async function GET() {
  return NextResponse.json({ teachersData }, { status: 200 });
}
export async function POST(req, res) {
  const data = await req.json();
  teachersData.push(data);
  console.log("data ", data);

  return NextResponse.json(data);
}
