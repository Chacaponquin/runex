"use client";

import React from "react";
import { Section } from "./components";
import Resize from "../Resize/Resize";
import { BodyProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";
import { GetSpecificProductsDTO } from "@modules/product/dto/product";

interface Props {
  getNewProducts(
    props: BodyProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
  getPopularProducts(
    props: BodyProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
  getTrendingProducts(
    props: BodyProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
}

export default function ProductSections({
  getNewProducts,
  getPopularProducts,
  getTrendingProducts,
}: Props) {
  return (
    <main className="flex flex-col w-full bg-gray-100 pt-8">
      <Resize
        className="flex flex-col gap-y-10 w-full flex-wrap pb-6"
        containerClass="pb-20"
      >
        <Section title="Nuevos Productos" getProducts={getNewProducts} />
        <Section title="Populares" getProducts={getPopularProducts} />
        <Section title="Trending" getProducts={getTrendingProducts} />
      </Resize>
    </main>
  );
}
