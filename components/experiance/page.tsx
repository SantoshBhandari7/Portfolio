import Link from "next/link";
import React from "react";
import { BiArrowToRight, BiRightArrow } from "react-icons/bi";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <main className="w-full">
      <section className="flex flex-col gap-1 w-full sm:px-5 lg:px-7">
        <h1 className="text-2xl font-semibold">
          MERN Stack Developer Certification
        </h1>
        <div className="flex gap-2 sm:flex-col  items-center md:items-center lg:items-center lg:justify-center md:flex-row lg:flex-row">
          <h3 className=" text-blue-500 border w-fit h-fit p-1 border-gray-700 rounded-lg ">
            BroadWay Infosis
          </h3>
          <span className="text-gray-500 font-normal"> 2026 </span>
        </div>
        <p className="font-normal text-gray-400 text-sm">
          Developing full-stack web applications using MongoDB, Express.js,
          React, and Node.js, with a focus on creating dynamic, scalable, and
          responsive web experiences.
        </p>
      </section>
      <Link
        href={"/herophoto.jpg"}
        target="_blank"
        rel="nooponer moreferrer"
        className="rounded-lg bg-blue-600 px-5 flex items-center gap-2 mt-2 w-fit h-fit py-2 text-white hover:bg-blue-700 hover:-translate-x-1"
      >
        View Certificate <BiArrowToRight />
      </Link>
    </main>
  );
};

export default Experience;
