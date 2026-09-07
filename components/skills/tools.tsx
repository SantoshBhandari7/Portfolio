import React from "react";
import AboutCard from "../common/cards/about.card";
import { GiTBrick } from "react-icons/gi";
import { SiGit, SiGithub, SiPostman } from "react-icons/si";

const Tools = () => {
  return (
    <main className="w-full px-4 py-6 sm:px-6 lg:py-8">
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <AboutCard
          icon={<SiGit size={15} />}
          name="Git"
          description="Version control system for tracking and managing code changes."
        />
        <AboutCard
          icon={<SiGithub size={15} />}
          name="GitHub"
          description="Platform for hosting, collaborating on, and managing code repositories."
        />
        <AboutCard
          icon={<SiPostman size={15} />}
          name="PostMan"
          description="API development and testing tool for sending requests and checking responses."
        />
      </div>
    </main>
  );
};

export default Tools;
