"use client";

import { useProductServices } from "@modules/product/services";
import { useUser } from "@modules/user/hooks";

interface Props {
  id: string;
  handleSelectProduct(id: string): void;
}

export default function useProduct({ id, handleSelectProduct }: Props) {
  const { actualUser, isProductFavorite } = useUser();

  const { addProductToFavorites } = useProductServices();

  function handleAddToFavorite() {
    if (actualUser) {
      addProductToFavorites({ productId: id, userId: actualUser.id });
    }
  }

  function handleSelect() {
    handleSelectProduct(id);
  }

  const isFavorite = isProductFavorite(id);

  return { handleAddToFavorite, handleSelect, isFavorite };
}
