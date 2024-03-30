"use client";

import { CartClothe } from "@modules/cart/domain";
import { useCart } from "@modules/cart/hooks";
import { Clothe } from "@modules/product/domain";
import { AddProductProps } from "@modules/shared/components/SelectedProduct/interfaces";
import { useState } from "react";

interface ClotheForm {
  size: string;
  color: string;
}

export default function useSelectedClothe() {
  const { handleSetProduct } = useCart();
  const [productInfo, setProductInfo] = useState<Clothe | null>(null);

  const [form, setForm] = useState<ClotheForm>({
    color: "",
    size: "",
  });

  function onFetchSuccess(data: Clothe) {
    setProductInfo(data);
    setForm({ color: data.colors[0], size: data.sizes[0] });
  }

  function handleChangeSize(size: string) {
    setForm((prev) => ({ ...prev, size: size }));
  }

  function handleChangeColor(color: string) {
    setForm((prev) => ({ ...prev, color: color }));
  }

  function handleAdd(props: AddProductProps) {
    handleSetProduct({
      product: new CartClothe({
        color: form.color,
        quantity: props.quantity,
        product: props.product,
        size: form.size,
      }),
    });
  }

  return {
    form,
    onFetchSuccess,
    handleChangeColor,
    handleChangeSize,
    productInfo,
    handleAdd,
  };
}
