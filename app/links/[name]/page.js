"use client";

import { useEffect, useState } from "react";

export default function Lists({ params: { name } }) {
  const [data, setData] = useState([]);

  const pathToItem = name[0].toLowerCase() + name.substring(1);
  console.log(pathToItem);

  const fetchData = async () => {
    try {
      fetch("http://localhost:3000/api/teacher", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("data", response);
          setData(response);
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
      <div className="flex justify-center item-center">
        <h2 className="text-white text-3xl">
          List of {name}s that have completed their registration details
        </h2>
      </div>
    </div>
  );
}
