"use client";

import { useClotheServices } from "@modules/product/services";
import { useEffect, useState } from "react";
import { useClotheForm } from "../../../shared/hooks";
import { useToast } from "@modules/app/modules/toast/hooks";

interface Props {
  id: string;
}

export default function useEditClothe(props: Props) {
  const { error, success } = useToast();
  const [fetchLoading, setFetchLoading] = useState(false);

  const { findById, editClothe } = useClotheServices();
  const {
    handleChangeForm,
    handleSubmit,
    loading: editLoading,
    handleChangeLoading,
    form,
    ...rest
  } = useClotheForm();

  useEffect(() => {
    setFetchLoading(true);

    findById({
      id: props.id,
      onSuccess(product) {
        handleChangeForm({
          category: product.categories[0],
          colors: product.colors,
          images: product.imagesData,
          name: product.name,
          price: product.price,
          provider: product.provider,
          sizes: product.sizes,
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
        editClothe({
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

  return { handleEdit, editLoading, fetchLoading, form, ...rest };
}
