import AboutSection from "@/components/about/page";
import React from "react";

const AboutPage = () => {
  return (
    <main className="w-full min-h-screen">
      <section className=" min-h-screen w-full  bg-[#040329de] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-12 lg:py-16">
        <div className=" mx-auto flex w-full max-w-7xl  flex-col items-center justify-center gap-10  lg:flex-row lg:items-center lg:gap-12">
          <div className="  w-full lg:text-left text-center lg:w-1/2">
            <h1 className="  mb-4 text-3xl font-bold  text-blue-500 sm:text-4xl lg:text-5xl">
              About Me
            </h1>

            <h3 className=" mb-5 text-xl font-semibold  text-gray-200   sm:text-2xl lg:text-3xl">
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

          <div className="w-full lg:w-1/2">
            <AboutSection />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
