"use client";

import { useContext } from "react";
import { CartContext } from "../context";
import { ChangeProductQuantityProps } from "../domain";
import { CART_ACTIONS } from "../constants";

export default function useCart() {
  const { cart, cartDispatch } = useContext(CartContext);

  function changeProductQuantity(props: ChangeProductQuantityProps): void {
    cartDispatch({
      type: CART_ACTIONS.CHANGE_PRODUCT_QUANTITY,
      payload: { productId: props.id, quantity: props.quantity },
    });
  }

  return { cart, changeProductQuantity };
}
