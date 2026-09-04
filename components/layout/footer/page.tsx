import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <main className="w-full h-[30vh]">
      <section className=" flex justify-evenly gap-5 bg-gray-500 px-7 py-7 h-full">
        <div>
          <h1>Santosh Bhandari</h1>
          <p>MERN Stack Developer</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-center">Quick Links</h1>
          <div className="grid grid-cols-2 gap-4">
            <Link href={"/"} className=" hover:text-blue-400">
              Home
            </Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/education"}>Education</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/skills"}>Skills</Link>
            <Link href={"/contact"}>contact</Link>
          </div>
        </div>
        <p>&copy; Santosh Bhandari</p>
      </section>
    </main>
  );
};

export default Footer;
