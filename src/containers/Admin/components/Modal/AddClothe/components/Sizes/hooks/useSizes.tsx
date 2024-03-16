"use client";

import { createRef, useState } from "react";

interface Props {
  handleAddSize(size: string): void;
}

export default function useSizes(props: Props) {
  const inputRef = createRef<HTMLInputElement>();

  const [newSize, setNewSize] = useState("");

  function handleChangeNewSize(value: string) {
    if (value.trim() !== "") {
      const last = value.slice(-1);

      if (last === " ") {
        props.handleAddSize(newSize);
        setNewSize("");
      } else {
        setNewSize(value);
      }
    } else {
      setNewSize(value);
    }
  }

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return { newSize, handleChangeNewSize, inputRef, handleClick };
}
