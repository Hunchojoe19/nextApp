"use client";
import React from "react";

const Greeting = () => {
  let date = new Date();
  let hour = date.getHours();
  let greeting = "";
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <div className="mt-6 flex flex-col justify-center items-center w-full">
      <h1 className="text-2xl flex justify-start items-start">
        Hello,{` ${greeting}`}
      </h1>
    </div>
  );
};

export default Greeting;
