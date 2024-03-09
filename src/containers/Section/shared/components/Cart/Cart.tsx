"use client";

import { useCart } from "@modules/cart/hooks";
import { Bill, Footer, Header, Products } from "./components";
import clsx from "clsx";
import { useBlockScroll } from "@modules/shared/hooks";

interface Props {
  handleChangeOpenCart(): void;
}

export default function Cart({ handleChangeOpenCart }: Props) {
  const { cart } = useCart();

  useBlockScroll(true);

  const CONTAINER_CLASS = clsx(
    "w-full h-screen",
    "flex justify-end",
    "fixed top-0 left-0",
    "py-4 px-5 esm:px-2",
    "bg-black/50",
    "overflow-y-auto"
  );

  const CLASS = clsx(
    "flex flex-col",
    "w-full max-w-[600px] h-max",
    "px-5 py-3",
    "shadow-lg",
    "bg-white",
    "rounded-lg"
  );

  return (
    <div className={CONTAINER_CLASS} onClick={handleChangeOpenCart}>
      <div className={CLASS} onClick={(e) => e.stopPropagation()}>
        <Header handleChangeOpenCart={handleChangeOpenCart} />
        <Products products={cart} />
        <Bill />
        <Footer />
      </div>
    </div>
  );
}
