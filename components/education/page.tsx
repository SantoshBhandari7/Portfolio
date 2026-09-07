import React from "react";

const Education = () => {
  return (
    <main className="w-full  p-6 sm:px-6 lg:px-8 lg:py-10">
      <section className="flex flex-col items-center gap-6 w-full px-6">
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-2xl">
            BE.Information Technology(BE-IT)
          </h1>
          <div className="flex gap-2 items-center ">
            <h3 className=" text-blue-400 border w-fit h-fit p-1 border-gray-400 rounded-lg">
              Everest Engineering College
            </h3>
            <span className="text-gray-500 font-normal">2024 - Present</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold  text-2xl">
            Higher Seconday Education -Science
          </h1>
          <div className="flex gap-2">
            <h3 className="border rounded-lg   w-fit h-fit p-1 border-gray-400 text-blue-400 ">
              Padmodaya Secondary School
            </h3>
            <span className="text-gray-500 font-normal">2079 - 2081</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Education;
