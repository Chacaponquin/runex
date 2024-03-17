"use client";

import { ProductColor } from "@modules/product/domain";
import { useProduct } from "@modules/product/hooks";
import { useState } from "react";

interface Props {
  handleAddColor(c: string): void;
  handleDeleteColor(c: string): void;
}

export default function useColors(props: Props) {
  const { colors: colorOptions } = useProduct();

  const [colors, setColors] = useState<
    Array<ProductColor & { selected: boolean }>
  >(colorOptions.map((c) => ({ ...c, selected: false })));

  function handleAdd(index: number) {
    setColors((prev) =>
      prev.map((c, i) => {
        if (i === index) {
          c.selected = true;
        }

        return c;
      })
    );

    props.handleAddColor(colors[index].name);
  }

  function handleDelete(index: number) {
    setColors((prev) =>
      prev.map((c, i) => {
        if (i === index) {
          c.selected = false;
        }

        return c;
      })
    );

    props.handleDeleteColor(colors[index].name);
  }

  return { colors, handleAdd, handleDelete };
}
