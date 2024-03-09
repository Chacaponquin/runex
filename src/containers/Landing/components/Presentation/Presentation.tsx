"use client";

import clsx from "clsx";
import { Header, Search } from "./components";
import { RefObject } from "react";

interface Props {
  presentationRef: RefObject<HTMLHeadElement>;
}

export default function Presentation({ presentationRef }: Props) {
  const CLASS = clsx(
    "flex justify-center",
    "w-full max-w-[1200px]",
    "xl:pt-36 pt-28 pb-16 xl:pb-0"
  );

  return (
    <header
      className="flex w-full px-7 justify-center md:mb-24 mb-16"
      ref={presentationRef}
    >
      <div className={CLASS}>
        <div className="flex flex-col w-full items-center">
          <Header />
          <Search />
        </div>
      </div>
    </header>
  );
}
