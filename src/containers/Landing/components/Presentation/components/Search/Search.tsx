"use client";

import clsx from "clsx";
import { Button, Input, Sections } from "./components";
import { useSearch } from "./hooks";

export default function Search() {
  const {
    handleBlur,
    handleFocus,
    id,
    handleSubmit,
    sections,
    selectedSection,
    handleChangeSelectedSection,
    handleChangeSearch,
    search,
  } = useSearch();

  const CLASS = clsx(
    "w-full",
    "flex items-center",
    "px-7 py-3.5 esm:px-5 esm:py-3",
    "rounded-l-md",
    "transition-all duration-200"
  );

  return (
    <form
      className="flex items-center shadow-lg w-full max-w-[700px] bg-gray-50 py-1 px-3"
      onSubmit={handleSubmit}
    >
      <Sections
        sections={sections}
        selectedSection={selectedSection}
        handleChangeSelectedSection={handleChangeSelectedSection}
      />

      <search className={CLASS}>
        <Input
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          id={id}
          value={search}
          handleChange={handleChangeSearch}
        />
      </search>

      <Button />
    </form>
  );
}
