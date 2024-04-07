"use client";

import { useCart } from "@modules/cart/hooks";
import { Bill, Empty, Footer, Header, Products } from "./components";
import clsx from "clsx";
import { useBlockScroll } from "@modules/shared/hooks";

interface Props {
  handleChangeOpenCart(): void;
}

export default function Cart({ handleChangeOpenCart }: Props) {
  const { cart } = useCart();

  useBlockScroll(true);

  const CONTAINER_CLASS = clsx(
    "w-full h-svh max-h-svh",
    "flex justify-end",
    "fixed top-0 left-0",
    "py-4 px-5 esm:px-2",
    "bg-black/50"
  );

  const CLASS = clsx(
    "flex flex-col",
    "w-full max-w-[600px]",
    "px-5 py-3",
    "shadow-lg",
    "bg-white",
    "rounded-lg",
    "overflow-y-auto",
    {
      "h-max max-h-full": cart.length > 0,
      "h-full": cart.length === 0,
    }
  );

  return (
    <div className={CONTAINER_CLASS} onClick={handleChangeOpenCart}>
      <div className={CLASS} onClick={(e) => e.stopPropagation()}>
        <Header handleChangeOpenCart={handleChangeOpenCart} />

        {cart.length > 0 ? (
          <Products products={cart} />
        ) : (
          <Empty handleClose={handleChangeOpenCart} />
        )}

        {cart.length > 0 && <Bill />}
        {cart.length > 0 && <Footer />}
      </div>
    </div>
  );
}
