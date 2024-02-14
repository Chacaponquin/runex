"use client";

import React from "react";
import { useProducts } from "./hooks";
import { Section } from "./components";

export default function ProductSections() {
  const { sections } = useProducts();

  return (
    <section className="flex flex-col gap-y-10 w-full">
      {sections.map((s) => (
        <Section key={s.id} products={s.products} title={s.title} />
      ))}
    </section>
  );
}
