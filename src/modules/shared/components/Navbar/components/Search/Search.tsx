"use client";

import { useState } from "react";
import { Search as SearchIcon } from "@modules/app/modules/icon/components";
import { Input } from "./components";
import clsx from "clsx";

interface Props {
  handleSearch(): void;
  handleChange(v: string): void;
  value: string;
}

export default function Search({ handleSearch, value, handleChange }: Props) {
  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  const CLASS = clsx(
    "flex justify-between items-center",
    "w-[280px] esm:w-[200px]",
    "rounded-full",
    "py-2.5 px-6 esm:px-5 esm:py-1.5",
    "gap-x-4",
    "stroke-black",
    "bg-gray-50",
    "border-[2px] border-gray-100",
    "transition-all duration-200",

    {
      "shadow-input !border-blue-500": focus,
      "hover:shadow-input hover:border-blue-500": !focus,
    }
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSearch();
  }

  return (
    <form onSubmit={handleSubmit} className="lg:block hidden">
      <search className="">
        <div className={CLASS}>
          <SearchIcon size={22} />

          <Input
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            value={value}
            handleChange={handleChange}
          />
        </div>
      </search>
    </form>
  );
}
