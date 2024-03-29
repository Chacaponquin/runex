"use client";

import { Section } from "../../shared/components";
import { Advantage, Header } from "./components";
import { useAboutUs } from "./hooks";

export default function AboutUs() {
  const { advantages } = useAboutUs();

  return (
    <Section alt={false} className="flex-col items-center">
      <Header />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-5 gap-y-3">
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
