"use client";

import React from "react";
import { useProducts } from "./hooks";
import { Section } from "./components";
import Resize from "../Resize/Resize";
import { PostProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";
import { GetSpecificProductsDTO } from "@modules/product/dto/product";

interface Props {
  getNewProducts(
    props: PostProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
  getPopularProducts(
    props: PostProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
  getTrendingProducts(
    props: PostProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
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
