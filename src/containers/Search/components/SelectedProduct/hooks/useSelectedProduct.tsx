"use client";

import { CartMedicine } from "@modules/cart/domain";
import { useCart } from "@modules/cart/hooks";
import { Product } from "@modules/product/domain";
import { AddProductProps } from "@modules/shared/components/SelectedProduct/interfaces";
import { useState } from "react";

export default function useSelectedProduct() {
  const { handleSetProduct } = useCart();

  const [productInfo, setProductInfo] = useState<Product | null>(null);

  function onFetchSuccess(data: Product) {
    setProductInfo(data);
  }

  function handleAdd({ product, quantity }: AddProductProps) {
    handleSetProduct({ product: new CartMedicine({ product, quantity }) });
  }

  return {
    onFetchSuccess,
    productInfo,
    handleAdd,
  };
}
