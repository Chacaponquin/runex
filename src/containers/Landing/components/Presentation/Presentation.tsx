"use client";

import clsx from "clsx";
import { Header, Search } from "./components";
import { RefObject } from "react";

interface Props {
  presentationRef: RefObject<HTMLElement>;
}

export default function Presentation({ presentationRef }: Props) {
  const CLASS = clsx(
    "grid grid-cols-1 xl:grid-cols-2",
    "xl:h-screen xl:min-h-[500px]",
    "w-full max-w-[1200px]",
    "gap-x-20",
    "xl:pt-36 pt-28 pb-16 xl:pb-0"
  );

  return (
    <header className="flex w-full px-10 justify-center" ref={presentationRef}>
      <div className={CLASS}>
        <div className="flex flex-col w-full">
          <Header />
          <Search />
        </div>
      </div>
    </header>
  );
}
