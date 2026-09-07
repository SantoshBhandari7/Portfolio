import AboutSection from "@/components/about/page";
import React from "react";

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen">
      <section className=" min-h-screen w-full text-center  bg-[#040329de] px-4 py-12 sm:px-6  md:px-8 lg:px-6 ">
        <h1 className=" inline-block h-16 border-b-4 border-green-400 pb-1 text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="mx-auto flex w-full max-w-7xl  flex-col items-center  gap-5  lg:flex-row lg:items-center lg:gap-8">
          <div className="min-h-108 w-full lg:text-left  text-center lg:w-1/2 p-3">
            <h3 className="text-xl font-semibold  text-gray-200  sm:text-2xl lg:text-3xl">
              Passionate About Full Stack Development
            </h3>

            <div className="space-y-3">
              <p className="text-sm  text-gray-400 sm:text-base  lg:text-lg">
                I'm a fresher Full Stack Developer with a strong interest in
                building modern, responsive and user-friendly web applications.
              </p>

              <p className="text-sm  text-gray-400 sm:text-base  lg:text-lg">
                Through academic learning, MERN Stack training and personal
                projects, I have developed practical experience in frontend
                development, backend development, REST APIs, authentication and
                databases.
              </p>

              <p className="text-sm   text-gray-400 sm:text-base  lg:text-lg">
                I enjoy learning new technologies and turning ideas into
                functional real-world applications.
              </p>
            </div>
          </div>

          <div className="w-full mt-3 min-w-0">
            <AboutSection />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
