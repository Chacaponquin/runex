"use client";

import { useState } from "react";

export default function useSection() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [openSideBar, setOpenSideBar] = useState(false);

  const [openCart, setOpenCart] = useState(false);

  function handleChangeOpenCart() {
    setOpenCart((prev) => !prev);
  }

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
    openCart,
    handleChangeOpenCart,
    openSideBar,
    handleCloseSideBar,
    handleOpenSideBar,
  };
}
