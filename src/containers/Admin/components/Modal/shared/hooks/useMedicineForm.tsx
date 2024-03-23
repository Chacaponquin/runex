"use client";

import { useState } from "react";
import { MedicineForm, UploadImage } from "../../interfaces";
import { useMedicines } from "@modules/product/hooks";
import { useValidator } from "@modules/app/modules/form/hooks";
import {
  ProductImagesValidator,
  ProductNameValidator,
} from "@modules/product/domain";
import { NotValidateField } from "@modules/app/modules/form/domain";
import { v4 as uuid } from "uuid";
import { useProductServices } from "@modules/product/services";
import { useToast } from "@modules/app/modules/toast/hooks";

interface SubmitProps {
  next(urls: string[]): void;
}

export default function useMedicineForm() {
  const { providers, categories } = useMedicines();
  const { error } = useToast();
  const { uploadImages: uploadImagesService } = useProductServices();

  const INITIAL_FORM: MedicineForm = {
    name: "",
    provider: providers[0].name,
    category: categories[0].name,
    images: [],
    price: 1,
  };

  const { validate } = useValidator<MedicineForm>({
    name: new ProductNameValidator(),
    provider: new NotValidateField(),
    images: new ProductImagesValidator(),
    category: new NotValidateField(),
    price: new NotValidateField(),
  });

  const [form, setForm] = useState<MedicineForm>(INITIAL_FORM);

  const [uploadImages, setUploadImages] = useState<Array<UploadImage>>([]);

  const [loading, setLoading] = useState(false);

  function handleChangeName(name: string) {
    setForm((prev) => ({ ...prev, name: name }));
  }

  function handleChangeProvider(provider: string) {
    setForm((prev) => ({ ...prev, provider: provider }));
  }

  function handleChangePrice(price: number) {
    setForm((prev) => ({ ...prev, price: price }));
  }

  function handleChangeCategory(category: string) {
    setForm((prev) => ({ ...prev, category: category }));
  }

  function handleChangeForm(newForm: MedicineForm) {
    setForm(newForm);
  }

  function handleSubmit({ next }: SubmitProps) {
    const validated = validate(form);

    if (validated) {
      setLoading(true);

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

  function handleChangeLoading(value: boolean) {
    setLoading(value);
  }

  function handleDeleteImage(id: string) {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((image) => image.id !== id),
    }));

    setUploadImages((prev) => prev.filter((i) => i.id !== id));
  }

  return {
    loading,
    form,
    handleChangeName,
    handleChangeProvider,
    handleChangeForm,
    handleSubmit,
    handleChangeCategory,
    handleChangePrice,
    categories,
    providers,
    handleChangeImages,
    uploadImages,
    handleChangeLoading,
    handleDeleteImage,
  };
}
