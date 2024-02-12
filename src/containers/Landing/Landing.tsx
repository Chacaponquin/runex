"use client";

import React from "react";
import {
  AboutUs,
  ContactUs,
  FAQ,
  Footer,
  Navbar,
  Presentation,
  Sections,
} from "./components";
import { useLanding } from "./hooks";

export default function Landing() {
  const { faq } = useLanding();

  return (
    <div className="flex flex-col w-full items-center bg-white">
      <Navbar />

      <Presentation />

      <main className="flex flex-col w-full gap-y-24 mt-10">
        <Sections />
        <AboutUs />
        <FAQ faq={faq} />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
