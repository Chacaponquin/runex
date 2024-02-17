"use client";

import { useState } from "react";

export default function useNavbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openUserOptions, setOpenUserOptions] = useState(false);

  function handleChangeOpenCart() {
    setOpenCart((prev) => !prev);
  }

  function handleChangeOpenFavorites() {
    setOpenFavorites((prev) => !prev);
  }

  function handleChangeOpenUserOptions() {
    setOpenUserOptions((prev) => !prev);
  }

  return {
    handleChangeOpenCart,
    openCart,
    openFavorites,
    openUserOptions,
    handleChangeOpenFavorites,
    handleChangeOpenUserOptions,
  };
}
