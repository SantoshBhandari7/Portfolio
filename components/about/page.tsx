import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <main className="w-full min-h-full ">
      <section className="flex flex-col bg-gray-200 min-h-screen w-full justify-center items-center gap-5 lg:gap-12 px-5 sm:px-6 md:px-8 lg:px-12 py-10 lg:py-8  sm:flex-col lg:flex lg:flex-row ">
        <div>
          <Image
            src={"/herophoto.jpg"}
            alt="Santosh Bhandari"
            width={800}
            height={600}
            className="w-full max-w-md lg:max-w-xl h-120 object-cover rounded-2xl"
          />
        </div>
        <div className="text-gray-500 w-full lg:w-1/2  flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-blue-500 sm:text-2xl lg:text-3xl text-center">
            About Me
          </h1>
          <h3 className="text-lg font-semibold text-gray-700 sm:text-lg lg:text-2xl text-center">
            Passionate About Full StacK Development
          </h3>
          <p className="text-md font-normal text-gray-600 px-5 ">
            I'm a fresher Full Stack Developer with a strong interest in
            building modern, responsive and user-friendly web applications.
          </p>
          <p className="text-md font-normal text-gray-600  px-5">
            Through academic learning, MERN Stack training and personal
            projects, I have developed practical experience in frontend
            development,backend development, REST APIs, authentication and
            databases.
          </p>
          <p className="text-md font-normal text-gray-600 px-5">
            I enjoy learning new technologies and turning ideas into functional
            real-world applications.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
