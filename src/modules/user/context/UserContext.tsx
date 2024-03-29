"use client";

import { createContext, useState, useEffect } from "react";
import { useUserServices } from "../services";
import { CurrentUser } from "../domain";

interface Props {
  actualUser: CurrentUser | null;
  loading: boolean;
  handleAddProductToFavorites(id: string): void;
  handleDeleteProductInFavorites(id: string): void;
}

const UserContext = createContext<Props>({
  actualUser: null,
  loading: true,
} as Props);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [actualUser, setActualUser] = useState<CurrentUser | null>(null);

  const { getUserByToken } = useUserServices();

  useEffect(() => {
    setLoading(true);
    getUserByToken({
      onSuccess(user) {
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

  const data = {
    actualUser,
    loading,
    handleAddProductToFavorites,
    handleDeleteProductInFavorites,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
