// "use client";
import ContactSection from "@/components/contact/page";
import React from "react";

const ContactPage = () => {
  return (
    <main className="w-full  bg-[#040329de] px-6 py-8 ">
      <section className="border-t  py-6 border-gray-700 min-h-full rounded-xl flex flex-col  justify-center items-center  sm:flex-col  gap-6 ">
        <h1 className="border-b-4  border-sky-400 bg-linear-to-r bg-clip-text text-transparent pb-1 inline-block from-blue-500 to-purple-500 mx-auto text-3xl font-bold mb-3">
          Contact
        </h1>

        <div className="flex flex-col text-gray-300  ">
          <p className="text-lg text-center m-2">
            Lets's Build Something Together
          </p>
          <p>
            I'm open to internships, junior developers roles and opertunities
            where I can learn, contribute and grow
          </p>
        </div>
        <div className="mt-5">
          <ContactSection />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
