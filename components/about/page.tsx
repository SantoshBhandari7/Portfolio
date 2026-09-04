import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main className="w-full min-h-full ">
      <section className="flex  bg-gray-500 h-full  w-full gap-3 px-20 py-4">
        <div>
          <Image
            src={"/herophoto.jpg"}
            alt="Santosh Bhandari"
            width={200}
            height={300}
          />
        </div>
        <div className="text-gray-100 flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-blue-500 sm:text-2xl lg:text-3xl text-center">
            About Me
          </h1>
          <h3>Passionate About Full StacK Development</h3>
          <p>
            I'm a fresher Full Stack Developer with a strong interest in
            building modern, responsive and user-friendly web applications.
          </p>
          <p>
            Through academic learning, MERN Stack training and personal
            projects, I have developed practical experience in frontend
            development,backend development, REST APIs, authentication and
            databases.
          </p>
          <p>
            {" "}
            I enjoy learning new technologies and turning ideas into │ │
            functional real-world applications.{" "}
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
