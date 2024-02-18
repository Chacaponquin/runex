import React from "react";
import { ContactInfo } from "../../interfaces";
import { Footer } from "./components";

interface Props {
  contacts: Array<ContactInfo>;
}

export default function Contact({ contacts }: Props) {
  return (
    <div className="lg:min-h-full flex flex-col bg-blue-500 rounded-lg text-white px-10 py-6 esm:px-7 esm:hidden">
      <h1 className="font-fontSemiBold whitespace-nowrap text-4xl esm:text-3xl mb-5 esm:mb-3.5 esm:whitespace-normal">
        Contact information
      </h1>

      <p className="text-lg mb-6 esm:text-base">
        Fill the form and our team will get back to you within 24 hours
      </p>

      <Footer contacts={contacts} />
    </div>
  );
}
