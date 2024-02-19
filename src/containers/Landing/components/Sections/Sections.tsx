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
      className="gap-x-12 gap-y-7 justify-center grid lg:grid-cols-2 grid-cols-1"
    >
      {sections.map((section, index) => (
        <Card
          key={index}
          title={section.title}
          image={section.image}
          url={section.url}
        />
      ))}
    </Section>
  );
}
