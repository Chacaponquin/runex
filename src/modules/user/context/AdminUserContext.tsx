"use client";

import { createContext, useState } from "react";
import { CurrentAdminUser } from "../domain";

interface Props {
  user: CurrentAdminUser | null;
  handleChangeUser(u: CurrentAdminUser): void;
}

export const AdminUserContext = createContext<Props>({ user: null } as Props);

export function AdminUserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CurrentAdminUser | null>(null);

  function handleChangeUser(u: CurrentAdminUser) {
    setUser(u);
  }

  const value = { user, handleChangeUser };

  return (
    <AdminUserContext.Provider value={value}>
      {children}
    </AdminUserContext.Provider>
  );
}
