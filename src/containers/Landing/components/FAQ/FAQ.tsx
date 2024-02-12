import React from "react";
import { Header, Questions } from "./components";
import { FAQ as IFAQ } from "../../interfaces";
import { Section } from "../../shared/components";

interface Props {
  faq: Array<IFAQ>;
}

export default function FAQ({ faq }: Props) {
  return (
    <Section alt={false} className="flex-col">
      <Header />

      <div className="flex w-full justify-between">
        <Questions faq={faq} />
      </div>
    </Section>
  );
}
