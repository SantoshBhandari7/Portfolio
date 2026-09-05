import React from "react";
import { IconType } from "react-icons";

interface AProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const AboutCard = ({ name, description, icon }: AProps) => {
  return (
    <div className="w-full  p-6 flex flex-col gap-3 items-center rounded-md  border border-blue-300 hover:translate-y-1 transition-all duration-300 hover:scale-[1.15] hover:w-full">
      <div className="flex gap-2 p-2">
        <p className="text-sky-300">{icon}</p>
        <p className="text-md text-white font-semibold sm:text-sm lg:text-lg">
          {name}
        </p>
      </div>
      <p className="text-sm text-white font-medium line-clamp-2 hover:line-clamp-4 ">
        {description}
      </p>
    </div>
  );
};

export default AboutCard;
