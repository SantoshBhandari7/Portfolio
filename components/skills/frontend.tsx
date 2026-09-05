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

const FrontEnd = () => {
  return (
    <main className="w-full px-4 py-6 sm:px-6 lg:py-8">
      <div
        className=" grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          sm:gap-5
          lg:grid-cols-3
          xl:grid-cols-4"
      >
        <AboutCard
          icon={<FaReact size={30} />}
          name="React"
          description="Building interactive UIs with React's component-based architecture"
        />
        <AboutCard
          icon={<SiNextdotjs size={30} />}
          name="Next.js"
          description="Developing fast and scalable web applications with Next.js."
        />

        <AboutCard
          icon={<TbBrandTypescript size={30} />}
          name="TypeScript"
          description="Writing reliable and maintainable code with TypeScript's strong typing."
        />

        <AboutCard
          icon={<BiLogoTailwindCss size={30} />}
          name="Tailwind CSS"
          description="Creating responsive and modern user interfaces with utility-first CSS classes."
        />
        <AboutCard
          icon={<TbBrandJavascript size={30} />}
          name="JavaScripts"
          description="Developing dynamic and interactive web experiences with JavaScript."
        />
        <AboutCard
          icon={<TbBrandHtml5 size={30} />}
          name="HTML5"
          description="Structuring modern and semantic web pages with HTML5."
        />
        <AboutCard
          icon={<TbBrandCss3 size={30} />}
          name="CSS3"
          description="Creating responsive and visually appealing designs with CSS3."
        />
      </div>
    </main>
  );
};

export default FrontEnd;
