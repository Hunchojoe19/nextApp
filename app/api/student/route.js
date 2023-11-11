import { NextResponse } from "next/server";
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./datastore");

export async function GET() {
  let studentData = [];
  const query = localStorage.getItem("studentData");
  if (query?.length)
    studentData = JSON.parse(localStorage.getItem("studentData"));

  return NextResponse.json({ studentData });
}
export async function POST(req, res) {
  let studentData = [];
  const data = await req.json();
  const query = localStorage.getItem("studentData");

  if (query?.length)
    studentData = JSON.parse(localStorage.getItem("studentData"));

  studentData.push(data);
  localStorage.setItem("studentData", JSON.stringify(studentData));

  return NextResponse.json(studentData);
}
