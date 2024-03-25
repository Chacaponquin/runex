"use client";

import { useState } from "react";

export default function useAdmin() {
  const [openAside, setOpenAside] = useState(false);

  function handleChangeOpenAside() {
    setOpenAside((prev) => !prev);
  }

  return { openAside, handleChangeOpenAside };
}
