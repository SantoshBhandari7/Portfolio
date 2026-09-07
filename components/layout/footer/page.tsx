import Link from "next/link";
import React from "react";
import { DiGithub } from "react-icons/di";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="w-full   bg-[#0c0964de] px-7 py-7 h-full">
      <section className=" flex justify-evenly gap-5   h-full">
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
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/contact"}>contact</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1>Connect With Me</h1>
          <div className="flex mt-3  gap-5 sm:flex-col lg:flex-row">
            <Link href={"https://github.com/SantoshBhandari7"}>
              <p className="flex text-md font-medium">
                <DiGithub size={20} /> GitHub
              </p>
            </Link>
            <Link href={""}>
              <p className="flex text-md font-medium">
                <FaLinkedin size={20} />
                LinkedIn
              </p>
            </Link>
            <Link href={"https://www.facebook.com/santosh.bhandari.473531/"}>
              <p className="flex text-md font-medium">
                <FaFacebook size={20} /> Facebook
              </p>
            </Link>
          </div>
        </div>
      </section>
      <div className="flex p-3  justify-evenly mt-3 border-t border-r-gray-400 w-full sm:flex-col lg:flex-row">
        <p className="text-base">&copy; Santosh Bhandari.</p>
        <p className="text-base">Built With Next.js and TailWindCSS</p>
      </div>
    </main>
  );
};

export default Footer;
