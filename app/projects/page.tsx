import ProjectSection from "@/components/project/page";
import React from "react";

const ProjectPage = () => {
  return (
    <main className="w-full py-10 border-t border-gray-700 bg-[#040329de]">
      <div className=" text-center">
        <h1 className="inline-block border-b-4 pb-1 justify-center text-center text-3xl font-bold border-sky-400 bg-clip-text bg-linear-to-r text-transparent from-blue-500 to-purple-500">
          My Projects
        </h1>
      </div>
      <ProjectSection />
    </main>
  );
};

export default ProjectPage;
