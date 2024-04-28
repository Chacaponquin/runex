"use client";

import { useCart } from "@modules/cart/hooks";
import { Bill, Empty, Footer, Header, Products } from "./components";
import clsx from "clsx";
import { Modal } from "@modules/app/components";

interface Props {
  handleChangeOpenCart(): void;
  open: boolean;
}

export default function Cart({ handleChangeOpenCart, open }: Props) {
  const { cart } = useCart();

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
    <Modal handleClose={handleChangeOpenCart} open={open} align="right">
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
    </Modal>
  );
}
