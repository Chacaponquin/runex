"use client";

import { useAdminUser } from "@modules/user/hooks";
import { useState } from "react";

export default function useAdmin() {
  const { user } = useAdminUser();
  const [openAside, setOpenAside] = useState(false);

  function handleChangeOpenAside() {
    setOpenAside((prev) => !prev);
  }

  return { openAside, handleChangeOpenAside, user };
}
