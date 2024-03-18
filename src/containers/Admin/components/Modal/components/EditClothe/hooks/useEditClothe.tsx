"use client";

import { useClotheServices } from "@modules/product/services";
import { useEffect, useState } from "react";
import { useClotheForm } from "../../../shared/hooks";

interface Props {
  id: string;
}

export default function useEditClothe(props: Props) {
  const [editLoading, setEditLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);

  const { findById } = useClotheServices();
  const { handleChangeForm, ...rest } = useClotheForm();

  useEffect(() => {
    setFetchLoading(true);

    findById({
      id: props.id,
      onSuccess(product) {
        if (product) {
          handleChangeForm({
            category: product.category,
            colors: product.colors,
            images: [],
            name: product.name,
            price: product.price,
            provider: product.provider,
            sizes: product.sizes,
          });
        }
      },
      onFinally() {
        setFetchLoading(false);
      },
    });
  }, []);

  function handleEdit() {
    setEditLoading(true);
  }

  return { handleEdit, editLoading, fetchLoading, ...rest };
}
