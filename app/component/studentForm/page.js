import React, { useState } from "react";
import TextValidationForm from "@/app/component/textValidation/page";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const StudentForm = () => {
  const date = dayjs().subtract(21, "year");
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState({
    firstName: "",
    surname: "",
    dateOfBirth: date,
    studentNumber: "",
    nationalId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher name:", inputValue);
  };
  return (
    <div className="w-full h-full bg-zinc-700 rounded-lg lg:w-[50%]">
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
            minDate={date}
          />
        </DemoContainer>
      </div>
      <TextValidationForm
        placeholder="Student Number"
        value={inputValue.studentNumber}
        onChange={(e) => {
          setInputValue({ ...inputValue, studentNumber: e.target.value });
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
