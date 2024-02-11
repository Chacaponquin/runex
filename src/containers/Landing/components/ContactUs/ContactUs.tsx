import React from "react";
import { Content, ImgSection } from "./components";
import { useContactUs } from "./hooks";

export default function ContactUs() {
  const { form, handleChange, handleSubmit } = useContactUs();

  return (
    <section className="w-full flex gap-x-10">
      <Content
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <ImgSection />
    </section>
  );
}
