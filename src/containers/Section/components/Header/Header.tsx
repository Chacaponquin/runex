import React from "react";
import { useHeader } from "./hooks";
import { Image as HeaderImage, Section } from "./components";

export default function Header() {
  const { sections } = useHeader();

  return (
    <header className="flex flex-col items-center w-full py-4 mb-5">
      <div className="flex items-center w-max gap-x-24 mb-4">
        {sections.map((section, index) => (
          <Section key={index} label={section.label} url={section.url} />
        ))}
      </div>

      <HeaderImage />
    </header>
  );
}
