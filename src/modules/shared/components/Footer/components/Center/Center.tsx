import React from "react";
import { FooterSection } from "../../interfaces";
import { Section } from "./components";

interface Props {
  sections: Array<FooterSection>;
}

export default function Center({ sections }: Props) {
  return (
    <div className="grid grid-cols-2 esm:grid-cols-1 gap-y-6 gap-x-3">
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          subSections={section.subSections}
        />
      ))}
    </div>
  );
}
