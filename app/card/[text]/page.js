"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TeacherForm from "@/app/component/teacherForm/page";
import StudentForm from "@/app/component/studentForm/page";

const RegisterationForm = ({ params }) => {
  // const [teacherName, setTeacherName] = useState("");
  // const [nameError, setNameError] = useState("");

  // const handleInputChange = (e) => {
  //   setTeacherName(e.target.value);

  //   if (e.target.value.trim() === "") {
  //     setNameError("Name is required");
  //   } else {
  //     setNameError("");
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (teacherName.trim() === "") {
  //     setNameError("Name is required");
  //     return;
  //   }

  //   console.log("Teacher name:", teacherName);
  // };

  1;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container mx-auto p-6 flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl mb-10">
          Registration Form {params.text}
        </h1>
        {params.text === "Student" && <StudentForm />}
        {params.text === "Teacher" && <TeacherForm />}
      </div>
    </LocalizationProvider>
  );
};

export default RegisterationForm;
