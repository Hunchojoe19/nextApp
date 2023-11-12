"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TeacherForm from "@/app/component/teacherForm/page";
import StudentForm from "@/app/component/studentForm/page";

const RegisterationForm = ({ params }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container mx-auto p-6 flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl mb-10">
          Registration Form For {params.text}
        </h1>
        {params.text === "Student" && <StudentForm />}
        {params.text === "Teacher" && <TeacherForm />}
      </div>
    </LocalizationProvider>
  );
};

export default RegisterationForm;
