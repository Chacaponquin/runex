"use client";

import { useState } from "react";

export default function useButtons() {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  function handleChangeOpenUserMenu() {
    setOpenUserMenu((prev) => !prev);
  }

  return { openUserMenu, handleChangeOpenUserMenu };
}
