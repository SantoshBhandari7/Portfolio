import React from "react";
import NavLinks from "./nav-content";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full h-16 z-9999 bg-[#3e3eaf]  ">
      <div className="fixed w-full  bg-[#08085d] shadow-md  flex overflow-x-hidden items-center justify-evenly px-4 sm:px-12 lg:px-8 lg:justify-evenly gap-10 ">
        <div className="flex h-auto justify-center item-center">
          <p className="text-3xl font-bold p-4 h-16 bg-linear-to-r bg-clip-text text-transparent bg-sky-600 to-pink-500">
            Santosh
          </p>
        </div>
        <div className="hidden sm:hidden md:flex md:flex-row sm:justify-evenly  lg:flex-row gap-5">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
