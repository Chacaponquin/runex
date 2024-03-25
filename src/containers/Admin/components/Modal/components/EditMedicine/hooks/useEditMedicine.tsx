"use client";

import { useMedicineServices } from "@modules/product/services";
import { useEffect, useState } from "react";
import { useMedicineForm } from "../../../shared/hooks";
import { useToast } from "@modules/app/modules/toast/hooks";

interface Props {
  id: string;
}

export default function useEditMedicine(props: Props) {
  const [fetchLoading, setFetchLoading] = useState(true);

  const {
    loading,
    form,
    handleChangeForm,
    handleSubmit,
    handleChangeLoading,
    ...rest
  } = useMedicineForm();

  const { findById, editMedicine } = useMedicineServices();
  const { error, success } = useToast();

  useEffect(() => {
    setFetchLoading(true);

    findById({
      id: props.id,
      onSuccess(product) {
        handleChangeForm({
          category: product.category,
          images: product.imagesData,
          name: product.name,
          price: product.price,
          provider: product.provider,
        });
      },
      onFinally() {
        setFetchLoading(false);
      },
    });
  }, []);

  function handleEdit() {
    handleSubmit({
      next(urls) {
        editMedicine({
          body: { ...form, images: [...urls, ...form.images.map((i) => i.id)] },
          onFinally() {
            handleChangeLoading(false);
          },
          onError() {
            error({
              id: "edit-product",
              message: "Hubo un error editando el producto",
            });
          },
          onSuccess() {
            success({
              id: "edit-product",
              message: "Producto editado con éxito",
            });
          },
        });
      },
    });
  }

  return {
    loading,
    fetchLoading,
    form,
    handleEdit,
    ...rest,
  };
}
