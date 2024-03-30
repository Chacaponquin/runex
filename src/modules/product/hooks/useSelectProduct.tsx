"use client";

import { useContext } from "react";
import { SelectProductContext } from "../contexts";

export default function useSelectProduct() {
  const { handleDeleteSelectedProduct, handleSelectProduct, selectedProduct } =
    useContext(SelectProductContext);

  return { handleDeleteSelectedProduct, selectedProduct, handleSelectProduct };
}
