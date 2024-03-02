"use client";

import { useContext } from "react";
import { CartContext } from "../context";
import { CART_ACTIONS } from "../constants";
import { Product } from "@modules/product/domain";

interface ChangeProductQuantityProps {
  id: string;
  quantity: number;
}

interface SetProductProps {
  productId: string;
  quantity: number;
}

export default function useCart() {
  const { cart, cartDispatch } = useContext(CartContext);

  function handleChangeProductQuantity(
    props: ChangeProductQuantityProps
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

  function handleDeleteProduct(id: string) {
    cartDispatch({
      payload: { productId: id },
      type: CART_ACTIONS.DELETE_PRODUCT,
    });
  }

  function totalQuantity() {
    let total = 0;

    for (const product of cart) {
      total += product.quantity;
    }

    return total;
  }

  function totalQuantityStr(): string {
    return String(totalQuantity());
  }

  function totalBill() {
    let total = 0;

    for (const product of cart) {
      total += product.product.price * product.quantity;
    }

    return total;
  }

  function totalBillStr(): string {
    return Product.str(totalBill());
  }

  function totalProductPrice(id: string): number {
    const found = cart.find((p) => p.product.id === id);

    if (found) {
      return found.product.price * found.quantity;
    } else {
      return 0;
    }
  }

  return {
    cart,
    handleChangeProductQuantity,
    handleSetProduct,
    handleDeleteProduct,
    totalBillStr,
    totalQuantityStr,
    totalProductPrice,
  };
}
