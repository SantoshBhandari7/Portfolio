import React from "react";

const Education = () => {
  return (
    <main className="w-full p-6 sm:px-6 lg:px-8 lg:py-6">
      <section className="flex flex-col gap-6 w-full px-6">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl sm:text-2xl lg:text-3xl">
            Bachelor Of Engineering In information Technology(BE-IT)
          </h1>
          <h3 className="flex gap-3 text-blue-400 rounded-xl  ">
            Everest Engineering College
            <span className="text-gray-500 font-normal">2024 - present</span>
          </h3>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-2xl">
            Higher Secondary Education(Science-physics)
          </h1>
          <h3 className="flex gap-4 rounded-xl text-blue-400">
            Padmodaya Secondary School{" "}
            <span className="text-gray-500 font-normal">2079 - 2081</span>
          </h3>
        </div>
      </section>
    </main>
  );
};

export default Education;
