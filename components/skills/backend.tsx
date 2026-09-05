import React from "react";
import AboutCard from "../common/cards/about.card";
import { TbApi, TbBrandMongodb, TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const Backend = () => {
  return (
    <main className="w-full px-6 py-7 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AboutCard
          icon={<TbBrandNodejs size={30} />}
          name="Node.js"
          description="Building scalable and efficient server-side applications using JavaScript with Node.js."
        />
        <AboutCard
          icon={<SiExpress size={30} />}
          name="Express.js"
          description="Developing fast and structured REST APIs and backend services using Express.js."
        />
        <AboutCard
          icon={<TbBrandMongodb />}
          name="MongoDB"
          description="Managing flexible and scalable application data using MongoDB and Mongoose."
        />
        <AboutCard
          icon={<TbApi size={30} />}
          name="REST APIs"
          description="Building scalable REST APIs with HTTP methods and JSON for efficient frontend–backend communication."
        />
      </div>
    </main>
  );
};

export default Backend;
