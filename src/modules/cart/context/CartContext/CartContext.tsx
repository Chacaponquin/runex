"use client";

import { Dispatch, Reducer, createContext, useEffect, useReducer } from "react";
import { Payload, cartReducer } from "../../reducer";
import { CartProduct } from "@modules/cart/domain";
import { CART_ACTIONS } from "@modules/cart/constants";

interface Props {
  cart: Array<CartProduct>;
  cartDispatch: Dispatch<Payload>;
}

const CartContext = createContext<Props>({
  cart: [] as Array<CartProduct>,
} as Props);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, cartDispatch] = useReducer<Reducer<Array<CartProduct>, Payload>>(
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

export { CartContext, CartProvider };
