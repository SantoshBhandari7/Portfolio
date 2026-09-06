import React from "react";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

const Experiance = () => {
  return (
    <main className="w-full">
      <section className="flex flex-col gap-3 w-full sm:px-5 lg:px-7">
        <IoEllipsisVerticalOutline />
        <h1>MERN Stack Developer Certification</h1>
        <h3 className="flex gap-4 text-blue-500 rounded-lg sm:flex-col lg:flex-row">
          BroadWay Infosis
          <span className="text-gray-500 font-normal"> 2026 </span>
        </h3>
        <p className="font-normal text-gray-400 text-sm">
          Developing full-stack web applications using MongoDB, Express.js,
          React, and Node.js, with a focus on creating dynamic, scalable, and
          responsive web experiences.
        </p>
      </section>
    </main>
  );
};

export default Experiance;
