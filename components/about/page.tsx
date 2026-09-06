"use client";

import React, { useState } from "react";
import SkillTabs from "../skills/skilltabs";
import { MdCastForEducation, MdSchool, MdWork } from "react-icons/md";
import { AiFillExperiment } from "react-icons/ai";
import { SiSkillshare } from "react-icons/si";
import Experiance from "../experiance/page";
import Education from "../education/page";
import { GiSkills } from "react-icons/gi";

const AboutSection = () => {
  const [about, setAbout] = useState("skills");

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="flex  flex-wrap justify-center gap-3 sm:gap-4 rounded-full border p-2 border-gray-500 w-full">
          <button
            onClick={() => setAbout("skills")}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
              about === "skills"
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : " text-gray-400 hover:text-white hover:border hover:border-gray-400"
            }`}
          >
            <GiSkills />
            <span>Skills</span>
          </button>
          <button
            onClick={() => setAbout("experience")}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
              about === "experience"
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : " text-gray-400 hover:text-white hover:border hover:border-gray-400"
            }`}
          >
            <MdWork />
            <span>Experience</span>
          </button>
          <button
            onClick={() => setAbout("education")}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${
              about === "education"
                ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                : " text-gray-400 hover:text-white hover:border hover:border-gray-400"
            }`}
          >
            <MdSchool />
            <span>Education</span>
          </button>
        </div>

        <div className="mt-8 w-full sm:mt-10">
          {about === "skills" && <SkillTabs />}
          {about === "experience" && <Experiance />}
          {about === "education" && <Education />}
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
