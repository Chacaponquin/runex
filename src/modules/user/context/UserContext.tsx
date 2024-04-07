"use client";

import { createContext, useState, useEffect } from "react";
import { useUserServices } from "../services";
import { CurrentUser } from "../domain";
import { useLocalStorage } from "@modules/shared/hooks";
import { STORAGE_KEYS } from "@modules/app/constants";

interface Props {
  actualUser: CurrentUser | null;
  loading: boolean;
  handleAddProductToFavorites(id: string): void;
  handleDeleteProductInFavorites(id: string): void;
  handleChangeUser(user: CurrentUser): void;
  handleRemoveUser(): void;
}

export const UserContext = createContext<Props>({
  actualUser: null,
  loading: true,
} as Props);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [actualUser, setActualUser] = useState<CurrentUser | null>(null);
  const { set } = useLocalStorage();

  const { getUserByToken } = useUserServices();

  useEffect(() => {
    setLoading(true);
    getUserByToken({
      onSuccess(user) {
        set(STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
        set(STORAGE_KEYS.REFRESH_TOKEN, user.refreshToken);
        setActualUser(user);
      },
      onError() {
        setActualUser(null);
      },
      onFinally() {
        setLoading(false);
      },
    });
  }, []);

  function handleAddProductToFavorites(id: string) {
    setActualUser((prev) => {
      if (prev) {
        return { ...prev, favorites: [...prev.favorites, id] };
      } else {
        return prev;
      }
    });
  }

  function handleDeleteProductInFavorites(id: string) {
    setActualUser((prev) => {
      if (prev) {
        return { ...prev, favorites: prev.favorites.filter((f) => f !== id) };
      } else {
        return prev;
      }
    });
  }

  function handleChangeUser(user: CurrentUser): void {
    setActualUser(user);
  }

  function handleRemoveUser() {
    setActualUser(null);
  }

  const data = {
    actualUser,
    loading,
    handleAddProductToFavorites,
    handleDeleteProductInFavorites,
    handleChangeUser,
    handleRemoveUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
