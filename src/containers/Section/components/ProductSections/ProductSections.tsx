"use client";

import React from "react";
import { useProducts } from "./hooks";
import { Section } from "./components";
import { Resize } from "@containers/Section/shared/components";

interface Props {
  handleSelectProduct(id: string): void;
}

export default function ProductSections({ handleSelectProduct }: Props) {
  const { sections } = useProducts();

  return (
    <Resize
      className="flex flex-col gap-y-10 w-full flex-wrap pb-6"
      containerClass="bg-gray-50 pb-20"
    >
      {sections.map((s) => (
        <Section
          key={s.id}
          products={s.products}
          title={s.title}
          handleSelectProduct={handleSelectProduct}
        />
      ))}
    </Resize>
  );
}
