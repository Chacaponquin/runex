"use client";

import { useProduct } from "@modules/product/hooks";

interface Props {
  handleAddColor(c: string): void;
  handleDeleteColor(c: string): void;
}

export default function useColors(props: Props) {
  const { colors: colorOptions } = useProduct();

  function handleAdd(index: number) {
    props.handleAddColor(colorOptions[index].name);
  }

  function handleDelete(index: number) {
    props.handleDeleteColor(colorOptions[index].name);
  }

  return { colorOptions, handleAdd, handleDelete };
}
