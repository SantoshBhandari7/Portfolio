import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/ui/button";
import AboutCard from "../common/cards/about.card";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs, SiSkillshare } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import SkillTabs from "../skills/skilltabs";
import { MdCastForEducation } from "react-icons/md";
import { AiFillExperiment } from "react-icons/ai";
import Experiance from "../experiance/page";
import Education from "../education/page";

const AboutSection = () => {
  const [about, setAbout] = useState("skills");
  return (
    <main>
      <section>
        <div
          onClick={() => setAbout("skills")}
          className={
            about === "skills"
              ? "rounded-full from-blue-500 to-purple-500 text-lg"
              : "rounded-full border-gray-700"
          }
        >
          <SiSkillshare /> Skills
        </div>
        <div
          onClick={() => setAbout("experience")}
          className={
            about === "experience"
              ? "rounded-full from-blue-500 to-purple-500 text-lg"
              : "rounded-full border-gray-600"
          }
        >
          <AiFillExperiment /> Experiance
        </div>

        <div
          onClick={() => setAbout("education")}
          className={
            about === "education"
              ? "rounded-full from-blue-500 to-purple-500 text-lg"
              : "rounded-full border-gray-600"
          }
        >
          <MdCastForEducation /> Education
        </div>

        <div>
          {about === "skills" && <SkillTabs />}
          {about === "experiance" && <Experiance />}
          {about === "education" && <Education />}
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
