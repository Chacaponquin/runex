"use client";

import { ProductCategory, Provider } from "../domain";

export default function useClothes() {
  const providers: Array<Provider> = [{ name: "Amazon" }, { name: "HyM" }];

  const categories: Array<ProductCategory> = [
    { name: "Zapatos" },
    { name: "Camisas" },
    { name: "Joyas" },
    { name: "Niños" },
  ];

  return { providers, categories };
}
