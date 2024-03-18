"use client";

import { useState } from "react";
import { useClotheServices } from "@modules/product/services";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useClotheForm } from "../../../shared/hooks";

export default function useAddClothe() {
  const { error, success } = useToast();
  const { createClothe, uploadImages } = useClotheServices();

  const [loading, setLoading] = useState(false);
  const {
    form,
    validate,
    handleAddColor,
    handleAddSize,
    handleChangeCategory,
    handleChangeImages,
    handleChangeName,
    handleChangePrice,
    handleChangeProvider,
    handleDeleteColor,
    handleDeleteImage,
    handleDeleteSize,
    handleReset,
    categories,
    providers,
  } = useClotheForm();

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

              handleReset();
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

  return {
    form,
    handleChangeName,
    handleChangePrice,
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
