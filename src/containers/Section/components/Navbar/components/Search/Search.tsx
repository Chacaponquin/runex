"use client";

import React, { useState } from "react";
import { Search as SearchIcon } from "@modules/app/modules/icon/components";
import { Input } from "./components";
import clsx from "clsx";

export default function Search() {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  const CLASS = clsx(
    "flex justify-between items-center",
    "w-[600px]",
    "rounded",
    "py-2 px-4",
    "gap-x-4",
    "stroke-black",
    {
      "border-[2px] border-blue-500": focus,
      "border-[2px] border-gray-100": !focus,
    }
  );

  return (
    <search className="">
      <div className={CLASS}>
        <Input handleBlur={handleBlur} handleFocus={handleFocus} />
        <SearchIcon size={22} />
      </div>
    </search>
  );
}
