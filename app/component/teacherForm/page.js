import React, { useState } from "react";
import TextValidationForm from "@/app/component/textValidation/page";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/navigation";

const TeacherForm = () => {
  const date = dayjs().subtract(21, "year");
  const router = useRouter();
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState({
    firstName: "",
    surname: "",
    dateOfBirth: date,
    teacherNumber: "",
    nationalId: "",
    title: "",
    salary: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = { inputValue };

    try {
      const res = await fetch("http://localhost:3000/api/teacher", {
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
    setInputValue({
      firstName: "",
      surname: "",
      dateOfBirth: date,
      teacherNumber: "",
      nationalId: "",
      title: "",
      salary: "",
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Teacher name:", inputValue);
  // };
  return (
    <div className="w-full h-full bg-zinc-700 rounded-lg lg:w-[50%]">
      <div className="flex flex-col justify-center items-start p-6 lg:items-center">
        <p className="">Title:</p>
        <select
          className="w-[100px] h-[50px] p-4 border border-grey-300 rounded-md focus:outline-none focus:border text-black"
          value={inputValue.title}
          onChange={(e) =>
            setInputValue({ ...inputValue, title: e.target.value })
          }
        >
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
          <option>Dr</option>
          <option>Prof</option>
        </select>
      </div>
      <TextValidationForm
        placeholder="First Name"
        value={inputValue.firstName}
        onChange={(e) => {
          setInputValue({ ...inputValue, firstName: e.target.value });
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
        value={inputValue.surname}
        onChange={(e) => {
          setInputValue({ ...inputValue, surname: e.target.value });
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
            value={inputValue.dateOfBirth}
            onChange={(prev) =>
              setInputValue({ ...inputValue, dateOfBirth: prev })
            }
            maxDate={date}
          />
        </DemoContainer>
      </div>
      <TextValidationForm
        placeholder="Teacher Number"
        value={inputValue.teacherNumber}
        onChange={(e) => {
          setInputValue({ ...inputValue, teacherNumber: e.target.value });
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
        value={inputValue.nationalId}
        onChange={(e) => {
          setInputValue({ ...inputValue, nationalId: e.target.value });
          if (e.target.value.trim() === "") {
            setError("National ID is required");
          } else {
            setError("");
          }
        }}
        error={error}
      />
      <TextValidationForm
        placeholder="Salary"
        value={inputValue.salary}
        onChange={(e) => {
          setInputValue({ ...inputValue, salary: e.target.value });
        }}
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

export default TeacherForm;
