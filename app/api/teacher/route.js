import { NextResponse } from "next/server";
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./datastore");

export async function GET() {
  let teachersData = [];
  const query = localStorage.getItem("teachersData");
  // console.log(query, query.length);
  if (query?.length)
    teachersData = JSON.parse(localStorage.getItem("teachersData"));

  return NextResponse.json({ teachersData });
}
export async function POST(req, res) {
  let teachersData = [];
  const data = await req.json();
  const query = localStorage.getItem("teachersData");
  // console.log(query, query.length);
  if (query?.length)
    teachersData = JSON.parse(localStorage.getItem("teachersData"));

  teachersData.push(data);
  localStorage.setItem("teachersData", JSON.stringify(teachersData));
  // teachersData.push(data);
  // console.log("data ", data);

  return NextResponse.json(teachersData);
}
