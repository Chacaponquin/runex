"use client";

import React from "react";
import { Header, Img, Questions } from "./components";
import { Section } from "../../shared/components";
import { useFAQ } from "./hooks";

export default function FAQ() {
  const { faq } = useFAQ();

  return (
    <Section alt={false} className="flex-col">
      <Header />

      <div className="flex w-full justify-between gap-x-20 items-center">
        <Questions faq={faq} />
        <Img />
      </div>
    </Section>
  );
}
