"use client";

import { useContext } from "react";
import { AdminUserContext } from "../context";

export default function useAdminUser() {
  const { user, handleChangeUser } = useContext(AdminUserContext);

  return { user, handleChangeUser };
}
