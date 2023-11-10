import React, { useState } from "react";
import TextValidationForm from "@/app/component/textValidation/page";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/navigation";

const StudentForm = () => {
  const date = dayjs().subtract(21, "year");
  const router = useRouter();
  const [error, setError] = useState("");
  const [studentsData, setStudentsData] = useState({
    firstName: "",
    surname: "",
    dateOfBirth: date,
    studentNumber: "",
    nationalId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = { studentsData };

    try {
      const res = await fetch("http://localhost:3000/api/student", {
        method: "POST",
        body: JSON.stringify(submitData),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      if (res.ok) {
        router.push("/");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
    setStudentsData({
      firstName: "",
      surname: "",
      dateOfBirth: date,
      studentNumber: "",
      nationalId: "",
    });
  };
  return (
    <div className="w-full h-full bg-zinc-700 rounded-lg lg:w-[50%]">
      <TextValidationForm
        placeholder="First Name"
        value={studentsData.firstName}
        onChange={(e) => {
          setStudentsData({ ...studentsData, firstName: e.target.value });
          if (e.target.value.trim() === "") {
            setError("Name is required");
          } else {
            setError("");
          }
        }}
        error={error}
      />
      <TextValidationForm
        placeholder="Surname"
        value={studentsData.surname}
        onChange={(e) => {
          setStudentsData({ ...studentsData, surname: e.target.value });
          if (e.target.value.trim() === "") {
            setError("Name is required");
          } else {
            setError("");
          }
        }}
        error={error}
      />
      <div className="flex justify-center items-center">
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            sx={{
              width: 300,
              backgroundColor: "white",
              outline: "none",
              borderRadius: "5px",
            }}
            label="Date Of Birth"
            value={studentsData.dateOfBirth}
            onChange={(prev) =>
              setStudentsData({ ...studentsData, dateOfBirth: prev })
            }
            minDate={date}
          />
        </DemoContainer>
      </div>
      <TextValidationForm
        placeholder="Student Number"
        value={studentsData.studentNumber}
        onChange={(e) => {
          setStudentsData({ ...studentsData, studentNumber: e.target.value });
          if (e.target.value.trim() === "") {
            setError("Field is required");
          } else {
            setError("");
          }
        }}
        error={error}
      />
      <TextValidationForm
        placeholder="National ID"
        value={studentsData.nationalId}
        onChange={(e) => {
          setStudentsData({ ...studentsData, nationalId: e.target.value });
          if (e.target.value.trim() === "") {
            setError("National ID is required");
          } else {
            setError("");
          }
        }}
        error={error}
      />

      <div className="mt-10 flex justify-center items-center mb-8">
        <button
          className="w-[300px] h-[50px] flex justify-center items-center text-white bg-blue-500 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
