import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/ui/button";
import AboutCard from "../common/cards/about.card";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import SkillTabs from "../skills/skilltabs";

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
          Skills
        </div>
        <div
          onClick={() => setAbout("experience")}
          className={
            about === "experience"
              ? "rounded-full from-blue-500 to-purple-500 text-lg"
              : "rounded-full border-gray-600"
          }
        ></div>
      </section>
    </main>
  );
};

export default AboutSection;
