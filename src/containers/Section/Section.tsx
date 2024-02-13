"use client";

import React from "react";
import { Footer, Header, Navbar } from "./components";

interface Props {
  section: string;
  q: string | undefined;
}

export default function Section({ section }: Props) {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
