"use client";

import { Search as SearchIcon } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  value: string;
  handleSearch(): void;
  handleChangeSearch(v: string): void;
}

export default function Search({
  handleSearch,
  value,
  handleChangeSearch,
}: Props) {
  const [focus, setFocus] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSearch();
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  const CLASS = clsx(
    "flex items-center",
    "w-full max-w-[520px] esm:max-w-[400px]",
    "border-[2px] border-gray-200",
    "rounded-full",
    "px-8 py-3.5 esm:px-6 esm:py-3",
    "gap-x-6",
    "transition-all duration-200",

    {
      "shadow-input !border-blue-500": focus,
      "hover:shadow-input hover:border-blue-500": !focus,
    }
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full justify-center esm:px-3"
    >
      <search className={CLASS}>
        <i className="stroke-black">
          <SearchIcon size={24} />
        </i>

        <input
          type="text"
          value={value}
          className="outline-none text-lg w-full"
          placeholder="Clothe title"
          onChange={(e) => handleChangeSearch(e.target.value)}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </search>
    </form>
  );
}
