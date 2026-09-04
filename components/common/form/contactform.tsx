"use client";
import React, { FormEvent } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Input from "../ui/input";
import TeaxtArea from "../ui/textarea";
import Button from "../ui/button";

const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message Submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        id="name"
        type="text"
        name="name"
        placeholder="enter your name"
        label="Name"
        required
      />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="your email"
        label="Email"
        required
      />

      <TeaxtArea
        id="message"
        name="message"
        label="Message"
        rows={5}
        placeholder="your message"
      />
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default ContactForm;
