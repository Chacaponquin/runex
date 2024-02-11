import React from "react";
import { Footer, Navbar } from "./components";
import { CartProvider } from "@modules/cart/context";

export default function Home() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Footer />
      </div>
    </CartProvider>
  );
}
