"use client";

import { ArrowDown, ArrowRight } from "@/modules/app/modules/icon/components";
import React, { useState } from "react";
import { Arrow } from "./components";
import clsx from "clsx";

interface Props {
  question: string;
  response: string;
}

export default function Card({ question, response }: Props) {
  const [open, setOpen] = useState(false);

  function handleChangeOpen() {
    setOpen((prev) => !prev);
  }

  const HEADER_CLASS = clsx(
    "flex justify-between items-center",
    "cursor-pointer",
    "gap-x-7",
    {
      "fill-dark text-dark": !open,
      "text-red-400 fill-red-400": open,
    }
  );

  return (
    <article className="flex flex-col gap-y-1.5 border-b-2 border-gray-200 pb-5 mb-4">
      <header className={HEADER_CLASS} onClick={handleChangeOpen}>
        <h2 className="text-lg font-fontMedium">{question}</h2>
        <Arrow open={open} />
      </header>

      {open && <p className="text-base text-gray-600 leading-7">{response}</p>}
    </article>
  );
}
