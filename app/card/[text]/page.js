import React from "react";

const RegisterationForm = ({ params }) => {
  return (
    <div>
      <h1 className="text-white text-2xl">Registration Form {params.text}</h1>
      {params.text === "student" && (
        <div className="w-[200px] h-[200px] border border-grey-300">
          Student Form
        </div>
      )}
      {params.text === "teacher" && (
        <div className="w-[200px] h-[200px] border border-grey-300">
          Teacher Form
        </div>
      )}
    </div>
  );
};

export default RegisterationForm;
