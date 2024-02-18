"use client";

import { useCart } from "@modules/cart/hooks";
import { Bill, Footer, Header, Products } from "./components";
import clsx from "clsx";

interface Props {
  full: boolean;
}

export default function Cart({ full }: Props) {
  const { cart } = useCart();

  const CLASS = clsx(
    "overflow-y-auto",
    "flex flex-col",
    "px-5 py-3",
    "shadow-lg",
    "rounded-xl",
    "bg-white",

    { "min-w-[400px] max-h-[600px]": !full, "w-full h-screen": full },

    { absolute: !full, "fixed top-0 left-0": full },

    { "-translate-x-[95%] translate-y-9": !full }
  );

  return (
    <div className={CLASS}>
      <Header />
      <Products products={cart.products} />
      <Bill />
      <Footer />
    </div>
  );
}
