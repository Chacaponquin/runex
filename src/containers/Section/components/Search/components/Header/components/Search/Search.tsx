"use client";

import { Search as SearchIcon } from "@modules/app/modules/icon/components";
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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full justify-center esm:px-3"
    >
      <search className="flex items-center w-full max-w-[520px] esm:max-w-[400px] gap-x-6 px-8 py-3.5 rounded-full border-[2px] border-gray-200">
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
