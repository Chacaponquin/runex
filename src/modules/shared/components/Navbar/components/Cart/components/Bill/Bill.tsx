"use client";

import React from "react";
import { Info } from "./components";
import { useCart } from "@modules/cart/hooks";

export default function Bill() {
  const { totalQuantityStr, totalBillStr } = useCart();

  return (
    <section className="flex flex-col w-full mb-3">
      <Info title="Cantidad" value={totalQuantityStr()} />
      <Info title="Sub Total" value={totalBillStr()} />
      <div className="border-t-[3px] border-gray-300 border-dashed w-full mt-2 mb-2.5"></div>
      <Info title="Total" value={totalBillStr()} />
    </section>
  );
}
