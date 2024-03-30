"use client";

import React from "react";
import { useProducts } from "./hooks";
import { Section } from "./components";
import Resize from "../Resize/Resize";
import { FetchProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";

interface Props {
  getNewProducts(props: FetchProps<Array<Product>>): void;
  getPopularProducts(props: FetchProps<Array<Product>>): void;
  getTrendingProducts(props: FetchProps<Array<Product>>): void;
}

export default function ProductSections({
  getNewProducts,
  getPopularProducts,
  getTrendingProducts,
}: Props) {
  const { sections } = useProducts({
    getNewProducts,
    getPopularProducts,
    getTrendingProducts,
  });

  return (
    <main className="flex flex-col w-full bg-gray-100 pt-8">
      <Resize
        className="flex flex-col gap-y-10 w-full flex-wrap pb-6"
        containerClass="pb-20"
      >
        {sections.map((s) => (
          <Section key={s.id} products={s.products} title={s.title} />
        ))}
      </Resize>
    </main>
  );
}
