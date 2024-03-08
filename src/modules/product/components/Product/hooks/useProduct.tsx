"use client";

import { useProductActions } from "@modules/product/hooks";
import { useUser } from "@modules/user/hooks";

interface Props {
  id: string;
  handleSelectProduct(id: string): void;
}

export default function useProduct({ id, handleSelectProduct }: Props) {
  const { handleAddFavorite, handleDeleteFavorite, isFavorite } =
    useProductActions({
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
  };
}
