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
  const { faq, presentationRef, presentationVisible } = useLanding();

  return (
    <div className="flex flex-col w-full items-center bg-white">
      <Navbar presentationVisible={presentationVisible} />

      <Presentation presentationRef={presentationRef} />

      <main className="flex flex-col w-full xl:gap-y-24 esm:gap-y-16 gap-y-20 mb-20 esm:mb-12">
        <Sections />
        <AboutUs />
        <FAQ faq={faq} />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
