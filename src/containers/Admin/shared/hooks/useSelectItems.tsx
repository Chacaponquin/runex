"use client";

import { useState } from "react";

interface SelectProps {
  value: boolean;
  id: string;
}

export default function useSelectItems() {
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  function handleSelect({ id, value }: SelectProps) {
    if (!value) {
      setSelectedItems((prev) => prev.filter((e) => e !== id));
    } else {
      setSelectedItems((prev) => [...prev, id]);
    }
  }

  function handleCleanItems() {
    setSelectedItems([]);
  }

  return { selectedItems, handleSelect, handleCleanItems };
}
