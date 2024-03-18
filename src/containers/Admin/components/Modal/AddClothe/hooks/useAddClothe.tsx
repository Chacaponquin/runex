"use client";

import { useState } from "react";
import { AddCLotheForm } from "../interfaces";
import { useClothes } from "@modules/product/hooks";
import { useClotheServices } from "@modules/product/services";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useValidator } from "@modules/app/modules/form/hooks";
import { NotValidateField } from "@modules/app/modules/form/domain";
import {
  ClotheColorsValidator,
  ClotheSizesValidator,
  ProductImagesValidator,
  ProductNameValidator,
} from "@modules/product/domain";

export default function useAddClothe() {
  const { error, success } = useToast();
  const { providers, categories } = useClothes();
  const { createClothe, uploadImages } = useClotheServices();

  const [loading, setLoading] = useState(false);

  const INITIAL_FORM = {
    name: "",
    price: 0,
    provider: providers[0].name,
    images: [],
    colors: [],
    sizes: [],
    category: categories[0].name,
  };

  const { validate } = useValidator<AddCLotheForm>({
    category: new NotValidateField(),
    colors: new ClotheColorsValidator(),
    images: new ProductImagesValidator(),
    name: new ProductNameValidator(),
    price: new NotValidateField(),
    provider: new NotValidateField(),
    sizes: new ClotheSizesValidator(),
  });

  const [form, setForm] = useState<AddCLotheForm>(INITIAL_FORM);

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
    const validated = validate(form);

    if (validated) {
      setLoading(true);

      uploadImages(form.images)
        .then((urls) => {
          createClothe({
            body: { ...form, images: urls },
            onFinally() {
              setLoading(false);
            },
            onError() {
              error({
                id: "product-creation",
                message: "Hubo un error creando el producto",
              });
            },
            onSuccess() {
              success({
                id: "create-product",
                message: "Producto creado con éxito",
              });

              setForm(INITIAL_FORM);
            },
          });
        })
        .catch(() => {
          error({
            id: "upload-image",
            message: "Hubo un error al subir las imágenes",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
