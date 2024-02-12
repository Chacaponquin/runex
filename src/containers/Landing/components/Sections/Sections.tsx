"use client";

import React from "react";
import { Section } from "../../shared/components";
import { useSections } from "./hooks";
import { Card } from "./components";

export default function Sections() {
  const { sections } = useSections();

  return (
    <Section
      alt={false}
      className="gap-x-12 gap-y-4 justify-center flex-col lg:flex-row"
    >
      {sections.map((section, index) => (
        <Card
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          url={section.url}
        />
      ))}
    </Section>
  );
}
