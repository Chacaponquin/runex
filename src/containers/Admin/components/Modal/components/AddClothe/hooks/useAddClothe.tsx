"use client";

import { useClotheServices } from "@modules/product/services";
import { useToast } from "@modules/app/modules/toast/hooks";
import { useClotheForm } from "../../../shared/hooks";

export default function useAddClothe() {
  const { error, success } = useToast();
  const { createClothe } = useClotheServices();

  const {
    form,
    handleSubmit,
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
    loading,
    handleChangeLoading,
    handleChangeDescription,
  } = useClotheForm();

  function handleSave() {
    handleSubmit({
      next(urls) {
        createClothe({
          body: { ...form, images: urls },
          onFinally() {
            handleChangeLoading(false);
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
      },
    });
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
    handleChangeDescription,
    categories,
    loading,
  };
}
