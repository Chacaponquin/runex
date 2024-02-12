"use client";

import React from "react";
import { Section } from "../../shared/components";
import { Advantage, Header } from "./components";
import { useAboutUs } from "./hooks";

export default function AboutUs() {
  const { advantages } = useAboutUs();

  return (
    <Section alt={false} className="flex-col items-center">
      <Header />

      <div className="grid grid-cols-3 gap-x-5">
        {advantages.map((a, index) => (
          <Advantage
            key={index}
            title={a.title}
            image={a.picture}
            description={a.description}
          />
        ))}
      </div>
    </Section>
  );
}
