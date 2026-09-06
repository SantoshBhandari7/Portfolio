import React from "react";

const Education = () => {
  return (
    <main className="w-full p-6 sm:px-6 lg:px-8 lg:py-6">
      <section className="flex flex-col gap-6 w-full px-6">
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-2xl">
            Bachelor Of Engineering In information Technology(BE-IT)
          </h1>
          <div className="flex gap-2 ">
            <h3 className=" text-blue-400 rounded-xl  ">
              Everest Engineering College
            </h3>
            <span className="text-gray-500 font-normal">2024 - Present</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold text-2xl">
            Higher Secondary Education(Science-physics)
          </h1>
          <div className="flex gap-2 sm:flex sm:flex-col">
            <h3 className="frounded-xl text-blue-400 ">
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
