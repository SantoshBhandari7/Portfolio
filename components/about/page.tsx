import Image from "next/image";
import React from "react";
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
  return (
    <main>
      <SkillTabs />
    </main>
  );
};

export default AboutSection;
