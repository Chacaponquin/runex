"use client";

import React from "react";
import { Contact, Content } from "./components";
import { useContactUs } from "./hooks";
import { Section } from "../../shared/components";

export default function ContactUs() {
  const { form, handleChange, handleSubmit, contacts } = useContactUs();

  return (
    <Section alt={false}>
      <div className="w-full flex bg-white rounded lg:flex-row flex-col gap-y-3">
        <Contact contacts={contacts} />
        <Content
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </Section>
  );
}
