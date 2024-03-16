"use client";

import { useState } from "react";
import { AddCLotheForm } from "../interfaces";
import { useProduct } from "@modules/product/hooks";

export default function useAddClothe() {
  const { providers } = useProduct();

  const [form, setForm] = useState<AddCLotheForm>({
    name: "",
    price: 0,
    provider: providers[0].name,
    images: [],
    colors: [],
    sizes: [],
  });

  function handleChangeName(name: string) {
    setForm((prev) => ({ ...prev, name: name }));
  }

  function handleChangePrice(value: number) {
    setForm((prev) => ({ ...prev, price: value }));
  }

  function handleSave() {}

  function handleCancel() {}

  function handleChangeProvider(prov: string) {
    setForm((prev) => ({ ...prev, provider: prov }));
  }

  function handleChangeImages(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);

      if (file) {
        setForm((prev) => ({ ...prev, images: [...prev.images, file] }));
      }
    }
  }

  function handleDeleteImage(index: number) {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, inx) => inx !== index),
    }));
  }

  function handleAddSize(size: string) {
    setForm((prev) => ({ ...prev, sizes: [...prev.sizes, size] }));
  }

  function handleDeleteSize(index: number) {
    setForm((prev) => ({
      ...prev,
      sizes: prev.sizes.filter((_, inx) => inx !== index),
    }));
  }

  return {
    form,
    handleChangeName,
    handleChangePrice,
    handleCancel,
    handleSave,
    providers,
    handleChangeProvider,
    handleChangeImages,
    handleDeleteImage,
    handleAddSize,
    handleDeleteSize,
  };
}
