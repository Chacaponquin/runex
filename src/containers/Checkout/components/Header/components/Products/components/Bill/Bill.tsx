import { useCart } from "@modules/cart/hooks";
import React from "react";

export default function Bill() {
  const { totalBillStr } = useCart();

  return (
    <footer className="flex border-t-[1px] border-t-light-gray-100 w-full justify-end pt-4 pb-1.5 px-4">
      <div className="flex flex-col items-end">
        <span className="text-base text-right text-light-gray-300 font-fontMedium">
          Total
        </span>

        <p className="text-black text-xl esm:text-lg font-fontMedium">
          {totalBillStr()}
        </p>
      </div>
    </footer>
  );
}
