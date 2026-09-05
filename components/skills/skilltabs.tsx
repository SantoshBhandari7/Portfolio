"use client";
import React, { useState } from "react";
import FrontEnd from "./frontend";
import Backend from "./backend";
import CloudDeployemnet from "./devops";

const SkillTabs = () => {
  const [active, setActive] = useState("frontend");
  return (
    <main className="w-full">
      <section className="flex gap-3">
        <button
          onClick={() => setActive("frontend")}
          className={
            active === "frontend"
              ? "rounded-full bg-linear-to-r form-blue-500 to-purple-600 px-6 py-3 "
              : "rounded-full border border-gray-700 px-6 py-3"
          }
        >
          Frontend
        </button>
        <button
          onClick={() => setActive("backend")}
          className={
            active === "backend"
              ? "rounded-full bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3"
              : "rounded-full border border-gray-700 px-6 py-3"
          }
        >
          Backend
        </button>
        <button
          onClick={() => setActive("clouddeployment")}
          className={
            active === "clouddeployment"
              ? "rounded-full bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3"
              : "rounded-full border border-gray-700 px-6 py-3"
          }
        >
          CloudDeployment
        </button>
        <button
          onClick={() => setActive("tools")}
          className={
            active === "tools"
              ? "rounded-full bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3"
              : "rounded-full border border-gray-700 px-6 py-3"
          }
        >
          Tools
        </button>
      </section>
      <div>
        {active === "frontend" && <FrontEnd />}
        {active === "backend" && <Backend />}
        {active === "devops" && <CloudDeployemnet />}
      </div>
    </main>
  );
};

export default SkillTabs;
