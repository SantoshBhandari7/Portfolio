import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { PiDotDuotone, PiGithubLogo } from "react-icons/pi";

const HeroPage = () => {
  return (
    <main className="w-full bg-[#05053b]  ">
      <section className="relative min-h-[90vh]   bg-[#3e3eaf]  ">
        <div
          className="
            absolute
            min-h-150
            w-full
            bg-no-repeat
            bg-contain
           right-0
           h-full
            sm:min-h-163
            lg:min-h-175
            lg:bg-right
           rounded-full
          "
          style={{
            backgroundImage: "url('/picture.jpg')",
            backgroundSize: "auto 100%",
          }}
        >
          <div className="flex min-h-[150  px-5 py-15 md:px-10   sm:min-h-163 sm:px-10  md:py-2 lg:min-h-175 lg:px-20 sm:justify-center sm:py-8 lg:text-left  bg-[#10103d] ">
            <div className="max-w-xl pt-20  lg:text-left">
              <div className="flex   gap-3 text-4xl font-extrabold sm:text-5xl ">
                <h1 className="bg-linear-to-r bg-clip-text text-transparent from-blue-600 to-purple-600">
                  Santosh Bhandari
                </h1>
              </div>

              <p className="mt-4 text-xl font-semibold text-white sm:text-xl lg:text-2xl">
                Full Stack Developer | MERN Stack Devloper
              </p>
              <p className="mt-4 text-md leading-6 text-white sm:text-base lg:text-lg">
                I build modern web applications with a focus on clean design,
                smooth user experiences, and reliable backend functionality. As
                a fresher, I'm eager to learn, grow, and contribute to
                real-world development projects.
              </p>

              <div className="mt-5  grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((skill) => (
                  <p
                    key={skill}
                    className="flex items-center text-xl font-semibold text-gray-300 sm:text-base lg:text-lg"
                  >
                    <PiDotDuotone size={20} className="text-[#30efcd]" />
                    {skill}
                  </p>
                ))}
              </div>
              {/* Buttons */}
              <div className="mt-7 flex flex-col px-5 gap-5 sm:flex-row">
                <Link
                  href="/projects"
                  className="rounded-lg flex gap-0.5 bg-blue-500 px-5 py-3 w-fit h-fit text-center font-medium text-sm text-white hover:bg-blue-600 scale-[1.15] hover:-translate-x-1"
                >
                  View My Projects <BsArrowRight size={20} />
                </Link>

                <Link
                  href="/CV.pdf"
                  className="rounded-lg bg-blue-500 px-3 py-3 text-center font-medium text-white w-fit  hover:bg-blue-600 hover:-translate-x-1"
                >
                  View Resume
                </Link>
              </div>
              <div className=" flex gap-3  p-6 pl-20 mt-10 flex-wrap  ">
                <Link
                  href={"https://github.com/SantoshBhandari7"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center  text-gray-800  items-center gap-0.5 font-bold text-xl hover:text-gray-300 "
                >
                  <PiGithubLogo size={30} />
                </Link>
                <Link
                  href={"/www.linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-0.5 text-xl justify-center text-gray-800 items-center font-bold  hover:text-gray-300 "
                >
                  <LiaLinkedin size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroPage;
