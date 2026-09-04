// "use client";
import ContactSection from "@/components/contact/page";
import React from "react";

const ContactPage = () => {
  return (
    <main className="w-full bg-geay-100 ">
      <section className="min-h-full flex flex-col gap-3  px-6 py-8 text-gray-800">
        <ContactSection />
      </section>
    </main>
  );
};

export default ContactPage;
