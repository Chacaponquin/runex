import React from "react";
import { useHeader } from "./hooks";
import { Section } from "./components";

export default function Header() {
  const { sections } = useHeader();

  return (
    <header className="flex flex-col items-center w-full py-3">
      <div className="flex items-center w-max gap-x-24">
        {sections.map((section, index) => (
          <Section key={index} label={section.label} url={section.url} />
        ))}
      </div>
    </header>
  );
}
