"use client";

import React from "react";
import {
  ContactUs,
  FAQ,
  Footer,
  Navbar,
  PopularProducts,
  Presentation,
} from "./components";
import { useLanding } from "./hooks";

export default function Landing() {
  const { popularProducts, faq } = useLanding();

  return (
    <div className="flex flex-col w-full items-center bg-white">
      <Navbar />

      <main className="flex flex-col w-full max-w-[1000px] gap-y-24">
        <Presentation />
        <PopularProducts products={popularProducts} />
        <FAQ faq={faq} />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
