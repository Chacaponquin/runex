"use client";

import { CartProduct } from "@modules/cart/domain";
import { useCart } from "@modules/cart/hooks";
import { Product } from "@modules/product/domain";
import { useProductActions, useSelectProduct } from "@modules/product/hooks";

interface Props {
  product: Product;
}

export default function useProduct({ product }: Props) {
  const { handleSelectProduct } = useSelectProduct();
  const { handleSetProduct } = useCart();

  const {
    handleAddFavorite,
    handleDeleteFavorite,
    isFavorite,
    isInCart,
    handleDelete,
  } = useProductActions({
    productId: product.id,
  });

  function handleSelect() {
    handleSelectProduct({ id: product.id, type: product.type });
  }

  function handleAdd() {
    handleSetProduct({
      product: new CartProduct({ quantity: 1, product: product }),
    });
  }

  return {
    handleSelect,
    isFavorite,
    handleAddFavorite,
    handleDeleteFavorite,
    isInCart,
    handleDelete,
    handleAdd,
  };
}
