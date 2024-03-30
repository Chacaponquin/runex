"use client";

import { PRODUCT_TYPES } from "@modules/product/constants";
import { useProductActions, useSelectProduct } from "@modules/product/hooks";

interface Props {
  id: string;
  type: PRODUCT_TYPES;
}

export default function useProduct({ id, type }: Props) {
  const { handleSelectProduct } = useSelectProduct();

  const {
    handleAddFavorite,
    handleDeleteFavorite,
    isFavorite,
    isInCart,
    handleDelete,
  } = useProductActions({
    productId: id,
  });

  function handleSelect() {
    handleSelectProduct({ id: id, type: type });
  }

  return {
    handleSelect,
    isFavorite,
    handleAddFavorite,
    handleDeleteFavorite,
    isInCart,
    handleDelete,
  };
}
