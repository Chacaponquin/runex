"use client";

import clsx from "clsx";
import { Header, Search } from "./components";
import { APP_IMAGES } from "@modules/app/constants";
import { RefObject } from "react";

interface Props {
  presentationRef: RefObject<HTMLElement>;
}

export default function Presentation({ presentationRef }: Props) {
  const CLASS = clsx(
    "flex flex-col items-center",
    "h-screen min-h-[500px]",
    "w-full",
    "pt-36",
    "px-5"
  );

  return (
    <header
      className={CLASS}
      ref={presentationRef}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url(${APP_IMAGES.LANDING.PRESENTATION.src})`,
      }}
    >
      <Header />
      <Search />
    </header>
  );
}
