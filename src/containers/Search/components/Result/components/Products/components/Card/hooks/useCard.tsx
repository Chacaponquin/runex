"use client";

import { useProductActions } from "@modules/product/hooks";

interface Props {
  id: string;
}

export default function useCard({ id }: Props) {
  const { handleAddFavorite, handleDeleteFavorite, isFavorite } =
    useProductActions({ productId: id });

  return { handleAddFavorite, isFavorite, handleDeleteFavorite };
}
