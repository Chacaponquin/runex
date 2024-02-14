"use client";

import { useCart } from "@modules/cart/hooks";

interface Props {
  id: string;
  quantity: number;
}

export default function useProduct({ id, quantity }: Props) {
  const { changeProductQuantity } = useCart();

  function handleIncreaseQuantity(): void {
    changeProductQuantity({ id: id, quantity: quantity + 1 });
  }

  function handleDecreaseQuantity(): void {
    changeProductQuantity({ id: id, quantity: quantity - 1 });
  }

  return { handleDecreaseQuantity, handleIncreaseQuantity };
}
