"use client";

import { useState } from "react";
import { ClotheForm, UploadImage } from "../../interfaces";
import { useValidator } from "@modules/app/modules/form/hooks";
import { NotValidateField } from "@modules/app/modules/form/domain";
import {
  ClotheColorsValidator,
  ClotheSizesValidator,
  ProductImagesValidator,
  ProductNameValidator,
} from "@modules/product/domain";
import { useClothes } from "@modules/product/hooks";
import { v4 as uuid } from "uuid";
import { useProductServices } from "@modules/product/services";
import { useToast } from "@modules/app/modules/toast/hooks";

interface SubmitProps {
  next(urls: Array<string>): void;
}

export default function useClotheForm() {
  const { error } = useToast();
  const { providers, categories } = useClothes();
  const { uploadImages: uploadImagesService } = useProductServices();

  const INITIAL_FORM = {
    name: "",
    price: 0,
    provider: providers[0].name,
    images: [],
    colors: [],
    sizes: [],
    category: categories[0].name,
  };

  const [form, setForm] = useState<ClotheForm>(INITIAL_FORM);

  const [loading, setLoading] = useState(false);

  const [uploadImages, setUploadImages] = useState<Array<UploadImage>>([]);

  const { validate } = useValidator<ClotheForm>({
    category: new NotValidateField(),
    colors: new ClotheColorsValidator(),
    images: new ProductImagesValidator(),
    name: new ProductNameValidator(),
    price: new NotValidateField(),
    provider: new NotValidateField(),
    sizes: new ClotheSizesValidator(),
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
        const id = uuid();

        setUploadImages((prev) => [...prev, { id: id, file: file }]);

        setForm((prev) => ({
          ...prev,
          images: [
            ...prev.images,
            {
              id: id,
              name: file.name,
              size: file.size,
              source: URL.createObjectURL(file),
            },
          ],
        }));
      }
    }
  }

  function handleDeleteImage(id: string) {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((image) => image.id !== id),
    }));

    setUploadImages((prev) => prev.filter((i) => i.id !== id));
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

  function handleChangeForm(form: ClotheForm) {
    setForm(form);
  }

  function handleReset() {
    setForm(INITIAL_FORM);
  }

  function handleSubmit({ next }: SubmitProps) {
    const validated = validate(form);

    if (validated) {
      uploadImagesService(uploadImages.map((i) => i.file))
        .then((urls) => next(urls))
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

  function handleChangeLoading(value: boolean) {
    setLoading(value);
  }

  return {
    form,
    handleAddColor,
    handleDeleteColor,
    handleChangeCategory,
    handleDeleteSize,
    handleAddSize,
    handleChangeImages,
    handleDeleteImage,
    handleChangeName,
    handleChangePrice,
    handleChangeProvider,
    validate,
    handleChangeForm,
    handleReset,
    handleSubmit,
    handleChangeLoading,
    providers,
    categories,
    uploadImages,
    loading,
  };
}
