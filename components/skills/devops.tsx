import React from "react";
import AboutCard from "../common/cards/about.card";
import { TbBrandAws } from "react-icons/tb";
import { SiCloudinary, SiMongodb, SiRender } from "react-icons/si";

const CloudDeployemnet = () => {
  return (
    <main className="w-full px-4 py-6 sm:px-6 lg:py-8">
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
        <AboutCard
          icon={<SiCloudinary size={30} />}
          name="Cloudinary"
          description="Cloud-based image and media storage, optimization, and delivery service."
        />

        <AboutCard
          icon={<SiRender size={30} />}
          name="Render"
          description="Cloud platform for deploying and hosting web applications and backend APIs."
        />
        <AboutCard
          icon={<SiMongodb size={30} />}
          name="MongoDBAtlas"
          description="Cloud-based platform for hosting, managing, and scaling MongoDB databases."
        />
      </div>
    </main>
  );
};

export default CloudDeployemnet;
