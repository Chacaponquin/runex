"use client";

import clsx from "clsx";
import { Card, Input } from "./components";
import { useSizes } from "./hooks";

interface Props {
  handleAddSize(size: string): void;
  handleDeleteSize(index: number): void;
  sizes: Array<string>;
}

export default function Sizes({
  sizes,
  handleAddSize,
  handleDeleteSize,
}: Props) {
  const { handleChangeNewSize, newSize, inputRef, handleClick } = useSizes({
    handleAddSize,
  });

  const CLASS = clsx(
    "flex items-center",
    "flex-wrap",
    "w-full",
    "rounded",
    "gap-x-2 gap-y-2",
    "cursor-text"
  );

  return (
    <div className={CLASS} onClick={handleClick}>
      {sizes.map((s, index) => (
        <Card
          key={index}
          size={s}
          handleDeleteSize={() => handleDeleteSize(index)}
        />
      ))}

      <Input
        handleChange={handleChangeNewSize}
        value={newSize}
        inputRef={inputRef}
        isEmpty={sizes.length === 0}
      />
    </div>
  );
}
