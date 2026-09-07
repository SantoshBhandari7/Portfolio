import AboutSection from "@/components/about/page";
import React from "react";

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen">
      <section className=" min-h-screen w-full text-center  bg-[#040329de] px-4 py-12 sm:px-6  md:px-8 lg:px-6 ">
        <h1 className="inline-block  border-b-4 border-sky-400 text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="mx-auto mt-6 flex w-full max-w-7xl flex-col items-start gap-6 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex min-h-108 w-full flex-col justify-center rounded-xl border border-gray-600 p-5 lg:w-1/2 lg:p-8">
            <h3 className="text-xl font-semibold  text-gray-200  sm:text-2xl lg:text-3xl">
              Passionate About Full Stack Development
            </h3>

            <div className="space-y-3 mt-4 text-start">
              <p className="text-sm  text-gray-300 sm:text-base  lg:text-md">
                I'm a fresher Full Stack Developer with a strong interest in
                building modern, responsive and user-friendly web applications.
              </p>

              <p className="text-sm  text-gray-300 sm:text-base  lg:text-md">
                Through academic learning, MERN Stack training and personal
                projects, I have developed practical experience in frontend
                development, backend development, REST APIs, authentication and
                databases.
              </p>

              <p className="text-sm   text-gray-300 sm:text-base  lg:text-md">
                I enjoy learning new technologies and turning ideas into
                functional real-world applications.
              </p>
            </div>
          </div>

          <div className="w-fit rounded-xl  min-w-0 border border-gray-600  h-full p-3  lg:w-3/4">
            <AboutSection />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
