"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Nepali Store",
    description:
      "A full stack e-commerce platform for browsing products , managing carts and whishlists and purchasing the products",
    image: "/ecommerce.png",
    technologies: [
      "Next.js",
      "TypeScripts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTAPI",
      "Render",
    ],
    liveLink: "https://next-js-project-bm83.onrender.com/",
    githubLink: "https://github.com/SantoshBhandari7/Backend-project.git",
  },
  {
    id: 2,
    title: "School ManageMent System",
    description:
      "A management system designed to manage student, teacher, courses,classes and other school related information",
    image: "/e-commerce.png",
    technologies: [
      "Next.js",
      "TypeScripts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST ApI",
      "Render",
    ],
    liveLink: "#",
    githubLink: "#",
  },
];

const ProjectSection = () => {
  return (
    <main>
      <section
        id="projects"
        className="w-full  px-5 py-20 sm:px-8 md:px-10 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group  overflow-hidden rounded-2xl border border-gray-300 transition duration-300 hover:translate-1 gap-3  "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={2000}
                className="object-cover px-2 py-3 sm:px-4 rounded-3xl transition-transform  hover:scale-105 duration-500  "
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="text-sm mt-3 text-gray-400">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-gray-600 text-start from-blue-400 to-gray-400  text-sm font-medium text-gray-300 w-fit h-full px-4 py-1 "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex mt-4 relative z-10 gap-3 ">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className=" flex rounded-lg bg-blue-600 px-3 py-2
                       text-sm font-medium border cursor-pointer
                       border-gray-500 w-fit h-fit
                        text-white  gap-1 items-center "
                    >
                      Live Demo <FiExternalLink size={15} />
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="rounded-lg bg-blue-600 cursor-pointer  text-sm font-medium text-white flex gap-1 items-center w-fit h-fit p-2 "
                    >
                      GitHub <DiGithubBadge size={15} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectSection;
