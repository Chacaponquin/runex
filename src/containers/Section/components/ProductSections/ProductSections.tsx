"use client";

import React from "react";
import { useProducts } from "./hooks";
import { Section } from "./components";

export default function ProductSections() {
  const { sections } = useProducts();

  return (
    <section className="grid-cols-3 grid gap-x-6 w-full">
      {sections.map((s) => (
        <Section key={s.id} products={s.products} title={s.title} />
      ))}
    </section>
  );
}
