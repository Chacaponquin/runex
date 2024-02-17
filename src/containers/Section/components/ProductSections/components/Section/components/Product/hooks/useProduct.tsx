"use client";

import { useCart } from "@modules/cart/hooks";
import { useProductServices } from "@modules/product/services";
import { useUser } from "@modules/user/hooks";

interface Props {
  id: string;
  handleSelectProduct(id: string): void;
}

export default function useProduct({ id, handleSelectProduct }: Props) {
  const { actualUser } = useUser();

  const { handleSetProduct } = useCart();
  const { addProductToFavorites } = useProductServices();

  function handleAddProduct() {
    handleSetProduct({ productId: id, quantity: 1 });
  }

  function handleAddToFavorite() {
    if (actualUser) {
      addProductToFavorites({ productId: id, userId: actualUser.id });
    }
  }

  function handleSelect() {
    handleSelectProduct(id);
  }

  return { handleAddProduct, handleAddToFavorite, handleSelect };
}
