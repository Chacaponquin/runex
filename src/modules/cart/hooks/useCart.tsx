"use client";

import { useContext } from "react";
import { CartContext } from "../context";
import { handleChangeProductQuantityProps, SetProductProps } from "../domain";
import { CART_ACTIONS } from "../constants";

export default function useCart() {
  const { cart, cartDispatch } = useContext(CartContext);

  function handleChangeProductQuantity(
    props: handleChangeProductQuantityProps
  ): void {
    cartDispatch({
      type: CART_ACTIONS.CHANGE_PRODUCT_QUANTITY,
      payload: { productId: props.id, quantity: props.quantity },
    });
  }

  function handleSetProduct(props: SetProductProps): void {
    cartDispatch({
      payload: { productId: props.productId, quantity: props.quantity },
      type: CART_ACTIONS.SET_PRODUCT,
    });
  }

  return { cart, handleChangeProductQuantity, handleSetProduct };
}
