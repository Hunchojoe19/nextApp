"use client";

import { useEffect, useState } from "react";
import moment from "moment/moment";

export default function Lists({ params: { name } }) {
  const [data, setData] = useState([]);
  const [studentsData, setStudentsData] = useState([]);

  const pathToItem = name[0].toLowerCase() + name.substring(1);
  console.log(pathToItem);

  const fetchData = async () => {
    try {
      fetch(`http://localhost:3000/api/${pathToItem}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("data", response);
          setData(response?.teachersData);
          setStudentsData(response?.studentData);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data ");

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col justify-center item-center">
        <h2 className="text-white text-3xl lg:mt-10">
          List of {name}s that have completed their registration details
        </h2>
        {name === "Teacher"
          ? data.map((item, i) => (
              <>
                <div
                  className="w-[300px] lg:w-[400px] mt-[2rem] group rounded-lg border border-grey-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:mt-[5rem]"
                  key={item?.nationalId}
                >
                  <p className="text-2xl text-white">{i + 1}.</p>
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {item?.title} &nbsp; {item?.firstName + " " + item?.surname}{" "}
                  </h2>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 lg:text-lg`}
                  >
                    national Id: {item?.nationalId}
                  </p>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 lg:text-lg`}
                  >
                    teacher's number: {item?.teacherNumber}
                  </p>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 lg:text-lg`}
                  >
                    date of birth:{" "}
                    {moment(item?.dateOfBirth).format("MMM Do YYYY")}
                  </p>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 lg:text-lg`}
                  >
                    salary: {item?.salary}
                  </p>
                </div>
              </>
            ))
          : studentsData.map((item, i) => (
              <>
                <div
                  className="w-[300px] lg:w-[400px] mt-[2rem] group rounded-lg border border-grey-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:mt-[5rem]"
                  key={item?.nationalId}
                >
                  <p className="text-2xl text-white">{i + 1}.</p>
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    {item?.firstName + " " + item?.surname}{" "}
                  </h2>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 lg:text-lg`}
                  >
                    national Id: {item?.nationalId}
                  </p>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 lg:text-lg`}
                  >
                    student's number: {item?.studentNumber}
                  </p>
                  <p
                    className={`m-0 max-w-[30ch] text-sm opacity-50 lg:text-lg`}
                  >
                    date of birth:{" "}
                    {moment(item?.dateOfBirth).format("MMM Do YYYY")}
                  </p>
                </div>
              </>
            ))}
      </div>
    </div>
  );
}
