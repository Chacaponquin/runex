import React from "react";
import { useHeader } from "./hooks";
import { Image as HeaderImage, Section } from "./components";

export default function Header() {
  const { sections } = useHeader();

  return (
    <header className="flex flex-col items-center w-full bg-gray-50">
      <section className="flex items-center gap-x-24 bg-white py-4 w-full justify-center">
        {sections.map((section, index) => (
          <Section key={index} label={section.label} url={section.url} />
        ))}
      </section>

      <HeaderImage />
    </header>
  );
}
