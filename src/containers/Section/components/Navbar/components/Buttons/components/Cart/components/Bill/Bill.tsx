"use client";

import React from "react";
import { Info } from "./components";
import { useCart } from "@modules/cart/hooks";

export default function Bill() {
  const { cart } = useCart();

  return (
    <section className="flex flex-col w-full mb-3">
      <Info title="Quantity" value={cart.totalQuantityStr} />
      <Info title="Sub Total" value={cart.totalBillStr} />
      <div className="border-t-[3px] border-gray-300 border-dashed w-full mt-2 mb-2.5"></div>
      <Info title="Total" value={cart.totalBillStr} />
    </section>
  );
}
