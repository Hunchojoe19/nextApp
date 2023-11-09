import { NextResponse } from "next/server";

let teachersData = []; // Placeholder for storing teacher data

export async function GET(req) {
  // if (req.method === "GET") {
  //   // Fetch all teachers
  //   res.status(200).json(teachersData);
  // } else if (req.method === "POST") {
  //   // Add a new teacher
  //   const newTeacher = req.body;
  //   // Validate new teacher data here before adding
  //   // Example validation - Check for required fields
  //   if (
  //     !newTeacher.nationalId ||
  //     !newTeacher.title ||
  //     !newTeacher.name ||
  //     !newTeacher.surname ||
  //     !newTeacher.dateOfBirth ||
  //     !newTeacher.teacherNumber
  //   ) {
  //     return res.status(400).json({
  //       message: "Please provide all required fields for the teacher.",
  //     });
  //   }
  //   // Additional validation for age, salary, etc. can be added
  //   teachersData.push(newTeacher);
  //   res.status(201).json(newTeacher);
  // }
  // res.status(200).json(teachersData);
  // const res = NextResponse.next();
  console.log("vggg--------------------------------------");
  // return res.status().json(teachersData);
  return NextResponse.json({ teachersData }, { status: 200 });
}
