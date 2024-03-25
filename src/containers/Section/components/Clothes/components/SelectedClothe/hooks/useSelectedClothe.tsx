"use client";

import { Clothe } from "@modules/product/domain";
import { useState } from "react";

interface ClotheForm {
  size: string;
  color: string;
}

export default function useSelectedClothe() {
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

  return {
    form,
    onFetchSuccess,
    handleChangeColor,
    handleChangeSize,
    productInfo,
  };
}
