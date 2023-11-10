import Link from "next/link";
import React from "react";

const Links = ({ name }) => {
  return (
    <Link href={`/links/${name}`}>
      <div className="mt-20 group rounded-lg border border-grey-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold`}>{name} </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Click Here to View the List of {name} that have completed their
          registration details
          <span className="inline-block text-blue-500 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Links;
