import React from "react";
import { ContactInfo } from "../../interfaces";
import { Footer } from "./components";

interface Props {
  contacts: Array<ContactInfo>;
}

export default function Contact({ contacts }: Props) {
  return (
    <div className="min-h-full flex flex-col bg-blue-500 rounded-lg text-white px-10 py-6">
      <h1 className="font-fontSemiBold whitespace-nowrap text-4xl mb-5">
        Contact information
      </h1>

      <p className="text-lg mb-6">
        Fill the form and our team will get back to you within 24 hours
      </p>

      <Footer contacts={contacts} />
    </div>
  );
}
