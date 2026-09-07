import React from "react";
import ContactForm from "../common/form/contactform";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 text-white">
      <div className="w-full  mx-auto flex flex-col max-w-6xl gap-6 sm:flex-col md:flex-row md:items-start md:gap-8 lg:gap-12">
        <div className="w-full rounded-xl flex flex-col gap-4 border border-gray-600 p-4 sm:p-5 md:w-1/2">
          <h3>Details</h3>
          <div className="flex flex-col">
            <h1 className="flex items-center gap-1">
              <BiPhoneCall size={20} />
              <p className="text-lg font-medium">Phone</p>
            </h1>
            <span className="text-sm ">9744682585</span>
          </div>
          <div>
            <h1 className="flex gap-1 items-center">
              <MdEmail size={20} />
              <p className="text-lg font-medium">Email</p>
            </h1>
            <span className="text-sm">santooshbhandari88@gmail.com</span>
          </div>
          <div>
            <h1 className="flex gap-1 items-center">
              <BiLocationPlus size={20} />
              <p className="text-lg font-medium">Location</p>
            </h1>
            <span className="text-sm">Kathmandu, Nepal</span>
          </div>
        </div>
        <div className=" w-full md:1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
