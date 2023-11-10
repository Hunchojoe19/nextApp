import React from "react";

const Lists = ({ params }) => {
  let lists = [];
  const getLists = async () => {
    const res = await fetch(`http://localhost:3000/api/${params.name}`);
    lists = await res.json();
    return lists;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex justify-center item-center">
        <h2 className="text-white text-3xl">
          List of {params.name}s that have completed their registration details
        </h2>
        {params.name === "Teacher" &&
          lists.length > 0 &&
          lists?.map((list) => (
            <div className="mt-20 group rounded-lg border border-grey-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {list?.title} &nbsp;{list?.firstName}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.surname}
              </p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.dateOfBirth}
              </p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.teacherNumber}
              </p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.nationalId}
              </p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.salary}
              </p>
            </div>
          ))}
        {params.name === "Student" &&
          lists.length > 0 &&
          lists?.map((list) => (
            <div className="mt-20 group rounded-lg border border-grey-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {list?.firstName}{" "}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.surname}
              </p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.dateOfBirth}
              </p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.studentNumber}
              </p>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {list?.nationalId}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Lists;
