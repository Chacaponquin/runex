"use client";

import { useCart } from "@modules/cart/hooks";
import { useProductServices } from "@modules/product/services";
import { useUser } from "@modules/user/hooks";

interface Props {
  id: string;
}

export default function useCard({ id }: Props) {
  const { addProductToFavorites } = useProductServices();

  const { handleSetProduct } = useCart();
  const { actualUser, isProductFavorite } = useUser();

  function handleAddToCart() {
    handleSetProduct({ productId: id, quantity: 1 });
  }

  function handleAddFavorite() {
    if (actualUser) {
      addProductToFavorites({ productId: id, userId: actualUser.id });
    }
  }

  const isFavorite = isProductFavorite(id);

  return { handleAddToCart, handleAddFavorite, isFavorite };
}
