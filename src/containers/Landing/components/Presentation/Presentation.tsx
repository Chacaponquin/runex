"use client";

import clsx from "clsx";
import { Header, Image as PresImage, Search } from "./components";
import { RefObject } from "react";

interface Props {
  presentationRef: RefObject<HTMLElement>;
}

export default function Presentation({ presentationRef }: Props) {
  const CLASS = clsx(
    "grid grid-cols-1 xl:grid-cols-2",
    "h-screen min-h-[500px]",
    "w-full max-w-[1200px]",
    "gap-x-20",
    "pt-36"
  );

  return (
    <header className="flex w-full px-10 justify-center" ref={presentationRef}>
      <div className={CLASS}>
        <div className="flex flex-col w-full">
          <Header />
          <Search />
        </div>

        <PresImage />
      </div>
    </header>
  );
}
