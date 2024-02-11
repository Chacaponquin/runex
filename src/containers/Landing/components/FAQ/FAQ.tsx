import React from "react";
import { Header, Questions } from "./components";
import { FAQ as IFAQ } from "../../interfaces";

interface Props {
  faq: Array<IFAQ>;
}

export default function FAQ({ faq }: Props) {
  return (
    <section className="flex flex-col w-full">
      <Header />

      <div className="flex w-full justify-between">
        <Questions faq={faq} />
      </div>
    </section>
  );
}
