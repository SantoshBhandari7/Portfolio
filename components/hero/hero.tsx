import Link from "next/link";
import React from "react";
import { LiaLinkedin } from "react-icons/lia";
import { PiDotDuotone, PiGithubLogo } from "react-icons/pi";

const HeroPage = () => {
  return (
    <main className="w-full ">
      <section className="relative min-h-[50vh] overflow-hidden bg-[#E2DEDB] ">
        <div
          className="
            relative
            min-h-150
            w-full
          bg-no-repeat
          bg-contain
            bg-right
            sm:min-h-163
            lg:min-h-175
            lg:bg-right
           rounded-2xl

           
          "
          style={{
            backgroundImage: "url('/picture.jpg')",
            // backgroundSize: "auto 100%",
          }}
        >
          {/* Content */}
          <div className="flex min-h-[150 items-center px-5 py-10 sm:min-h-163 sm:px-10 lg:min-h-175 lg:px-20">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold flex text-blue-950 sm:text-2xl lg:text-3xl">
                HELLO, I'M SANTOSH BHANDARI
              </h1>
              <p className="mt-4 text-xl font-semibold text-gray-800 sm:text-xl lg:text-2xl">
                Full Stack Developer / MERN Stack Developer
              </p>
              <p className="mt-4 text-md leading-6 text-gray-800 sm:text-base lg:text-lg">
                I'm a fresher Full Stack Developer passionate about building
                modern and practical web applications.
              </p>
              <p className=" mt-1 text-sm leading-6 text-gray-800 sm:text-base lg:text-lg">
                Through academic learning, MERN Stack training and personal
                projects, I have developed practical experience in frontend
                development, backend development, REST APIs, authentication and
                databases.
              </p>
              <p className=" mt-1 text-md leading-6 text-gray-800 sm:text-base lg:text-lg">
                I enjoy learning new technologies and turning ideas into
                functional real-world applications.
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
                    className="flex items-center text-xl font-semibold text-gray-800 sm:text-base lg:text-lg"
                  >
                    <PiDotDuotone size={20} className="text-blue-600" />
                    {skill}
                  </p>
                ))}
              </div>
              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="rounded-lg bg-blue-500 px-5 py-3 text-center font-semibold text-white hover:bg-blue-600"
                >
                  View My Projects
                </Link>

                <Link
                  href="/downloadresume"
                  className="rounded-lg bg-blue-500 px-5 py-3 text-center font-semibold text-white hover:bg-blue-600"
                >
                  Download Resume
                </Link>
              </div>
              <div className="text-black flex gap-3 mt-5 flex-wrap items-center ">
                <Link
                  href={"https://github.com/SantoshBhandari7"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-0.5 font-bold text-xl sm:text-gray-100 lg:text-gray-700"
                >
                  <PiGithubLogo size={30} />
                  GitHub
                </Link>
                <Link
                  href={"/www.linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-0.5 text-xl justify-center items-center font-bold sm:text-blue-100 lg:text-gray-700"
                >
                  <LiaLinkedin size={30} /> linkedin
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
