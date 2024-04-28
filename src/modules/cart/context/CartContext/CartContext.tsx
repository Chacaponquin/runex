"use client";

import { Dispatch, Reducer, createContext, useEffect, useReducer } from "react";
import { Payload, cartReducer } from "../../reducer";
import { CartProduct } from "@modules/cart/domain";
import { CART_ACTIONS } from "@modules/cart/constants";

interface Props {
  cart: CartProduct[];
  cartDispatch: Dispatch<Payload>;
}

export const CartContext = createContext<Props>({
  cart: [] as CartProduct[],
} as Props);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, cartDispatch] = useReducer<Reducer<CartProduct[], Payload>>(
    cartReducer,
    []
  );

  useEffect(() => {
    cartDispatch({ type: CART_ACTIONS.INITIAL });
  }, []);

  const data = {
    cart,
    cartDispatch,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
