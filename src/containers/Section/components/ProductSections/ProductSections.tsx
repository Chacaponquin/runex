"use client";

import React from "react";
import { useProducts } from "./hooks";
import { Section } from "./components";
import { Resize } from "@containers/Section/shared/components";

export default function ProductSections() {
  const { sections } = useProducts();

  return (
    <Resize className="flex flex-col gap-y-10 w-full flex-wrap">
      {sections.map((s) => (
        <Section key={s.id} products={s.products} title={s.title} />
      ))}
    </Resize>
  );
}
