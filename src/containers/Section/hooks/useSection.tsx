"use client";

import { useState } from "react";

export default function useSection() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [openSideBar, setOpenSideBar] = useState(false);

  function handleOpenSideBar() {
    setOpenSideBar(true);
  }

  function handleCloseSideBar() {
    setOpenSideBar(false);
  }

  function handleSelectProduct(product: string) {
    setSelectedProduct(product);
  }

  function handleDeleteSelectedProduct() {
    setSelectedProduct(null);
  }

  return {
    selectedProduct,
    handleDeleteSelectedProduct,
    handleSelectProduct,
    openSideBar,
    handleCloseSideBar,
    handleOpenSideBar,
  };
}
