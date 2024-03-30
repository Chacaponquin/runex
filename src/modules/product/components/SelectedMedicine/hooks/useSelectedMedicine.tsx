"use client";

import { CartMedicine } from "@modules/cart/domain";
import { useCart } from "@modules/cart/hooks";
import { Medicine } from "@modules/product/domain";
import { AddProductProps } from "@modules/shared/components/SelectedProduct/interfaces";
import { useState } from "react";

export default function useSelectedMedicine() {
  const { handleSetProduct } = useCart();

  const [productInfo, setProductInfo] = useState<Medicine | null>(null);

  function onFetchSuccess(data: Medicine) {
    setProductInfo(data);
  }

  function handleAdd(props: AddProductProps) {
    handleSetProduct({
      product: new CartMedicine({
        product: props.product,
        quantity: props.quantity,
      }),
    });
  }

  return {
    onFetchSuccess,
    productInfo,
    handleAdd,
  };
}
