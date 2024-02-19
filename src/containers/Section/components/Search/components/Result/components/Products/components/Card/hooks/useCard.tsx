"use client";

import { useProductServices } from "@modules/product/services";
import { useUser } from "@modules/user/hooks";

interface Props {
  id: string;
}

export default function useCard({ id }: Props) {
  const { addProductToFavorites } = useProductServices();

  const { actualUser, isProductFavorite } = useUser();

  function handleAddFavorite() {
    if (actualUser) {
      addProductToFavorites({ productId: id, userId: actualUser.id });
    }
  }

  const isFavorite = isProductFavorite(id);

  return { handleAddFavorite, isFavorite };
}
