"use client";

import { useState } from "react";
import { AddCLotheForm } from "../interfaces";
import { useClothes } from "@modules/product/hooks";
import { useClotheServices } from "@modules/product/services";

export default function useAddClothe() {
  const { providers, categories } = useClothes();
  const { createClothe, uploadImages } = useClotheServices();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<AddCLotheForm>({
    name: "",
    price: 0,
    provider: providers[0].name,
    images: [],
    colors: [],
    sizes: [],
    category: categories[0].name,
  });

  function handleChangeName(name: string) {
    setForm((prev) => ({ ...prev, name: name }));
  }

  function handleChangePrice(value: number) {
    setForm((prev) => ({ ...prev, price: value }));
  }

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

  function handleAddColor(color: string) {
    setForm((prev) => ({ ...prev, colors: [...prev.colors, color] }));
  }

  function handleDeleteColor(color: string) {
    setForm((prev) => ({
      ...prev,
      colors: prev.colors.filter((c) => c !== color),
    }));
  }

  function handleChangeCategory(cat: string) {
    setForm((prev) => ({ ...prev, category: cat }));
  }

  function handleSave() {
    setLoading(true);

    uploadImages(form.images)
      .then(() => {
        createClothe({
          body: form,
          onFinally() {
            setLoading(false);
          },
          onError() {
            // create error
          },
          onSuccess() {
            // create success
          },
        });
      })
      .catch(() => {
        // upload error
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleCancel() {}

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
    handleAddColor,
    handleDeleteColor,
    handleChangeCategory,
    categories,
    loading,
  };
}
