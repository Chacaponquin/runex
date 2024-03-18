"use client";

import { useState } from "react";

export default function useClothes() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  function handleSelectProduct(product: string) {
    setSelectedProduct(product);
  }

  function handleDeleteSelectedProduct() {
    setSelectedProduct(null);
  }

  return {
    selectedProduct,
    handleDeleteSelectedProduct,
    handleSelectProduct,
  };
}
