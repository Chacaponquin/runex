"use client";

import { useCart } from "@modules/cart/hooks";
import { Bill, Footer, Header, Products } from "./components";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="absolute overflow-y-auto max-h-[600px] flex flex-col bg-white px-5 py-3 rounded-xl shadow-lg -translate-x-[95%] translate-y-9 min-w-[400px]">
      <Header />
      <Products products={cart.products} />
      <Bill />
      <Footer />
    </div>
  );
}
