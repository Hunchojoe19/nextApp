import { NextResponse } from "next/server";

let studentsData = [];

const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./datastore");
export async function GET() {
  return NextResponse.json({ studentsData }, { status: 200 });
}
export async function POST(req, res) {
  const data = await req.json();
  studentsData = localStorage.getItem("studentData") || [];
  studentsData.push(data);
  localStorage.setItem("studentData", studentsData);
  console.log("data ", data);

  return NextResponse.json(data);
}
