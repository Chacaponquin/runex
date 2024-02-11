"use client";

import { Dispatch, Reducer, createContext, useReducer } from "react";
import { Cart } from "../domain";
import { Payload, cartReducer } from "../../reducer";

interface Props {
  cart: Cart;
  cartDispatch: Dispatch<Payload>;
}

const CartContext = createContext<Props>({} as Props);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, cartDispatch] = useReducer<Reducer<Cart, Payload>>(
    cartReducer,
    new Cart()
  );

  const data = {
    cart,
    cartDispatch,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
