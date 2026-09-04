import React from "react";
import NavLinks from "./nav-content";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-gray-100">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-center item-center">
          <p className="text-3xl font-bold p-4 h-16 text-sky-400">Santosh</p>
        </div>
        <div className="flex gap-3">
          <NavLinks />

          <Link href={"/"}>
            <p className="flex bg-blue-400 font-bold rounded-lg text-gray-800 w-full h-full p-3 sm:h-fit sm:p-3 sm:items-center">
              DownLoad Resume <FaDownload size={20} />{" "}
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
