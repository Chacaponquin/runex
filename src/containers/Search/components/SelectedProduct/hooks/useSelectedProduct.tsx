"use client";

import { Product } from "@modules/product/domain";
import { useState } from "react";

export default function useSelectedProduct() {
  const [productInfo, setProductInfo] = useState<Product | null>(null);

  function onFetchSuccess(data: Product) {
    setProductInfo(data);
  }

  return {
    onFetchSuccess,
    productInfo,
  };
}
