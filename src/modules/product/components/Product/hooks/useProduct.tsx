"use client";

import { useProductActions } from "@modules/product/hooks";

interface Props {
  id: string;
  handleSelectProduct(id: string): void;
}

export default function useProduct({ id, handleSelectProduct }: Props) {
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
    handleSelectProduct(id);
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
