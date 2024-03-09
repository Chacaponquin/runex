"use client";

import React from "react";
import {
  AboutUs,
  ContactUs,
  FAQ,
  Footer,
  Presentation,
  Sections,
} from "./components";
import { useLanding } from "./hooks";
import { Navbar } from "@modules/shared/components";

export default function Landing() {
  const { presentationRef } = useLanding();

  return (
    <div className="flex flex-col w-full items-center bg-white">
      <Navbar disableSearch={true} fixed={true} />

      <Presentation presentationRef={presentationRef} />

      <main className="flex flex-col w-full xl:gap-y-24 esm:gap-y-16 gap-y-20 mb-20 esm:mb-12">
        <Sections />
        <AboutUs />
        <FAQ />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
