"use client";

import { TOKEN_LOCATION } from "../constants";
import { useCallback, useContext } from "react";
import { UserContext } from "../context";

export default function useUser() {
  const { actualUser, loading } = useContext(UserContext);

  function handleSignIn(token: string) {
    localStorage.setItem(TOKEN_LOCATION, token);
    window.location.reload();
  }

  function handleSignOut() {
    localStorage.removeItem(TOKEN_LOCATION);
    window.location.reload();
  }

  function isProductFavorite(productId: string): boolean {
    if (actualUser) {
      return actualUser.favorites.includes(productId);
    } else {
      return false;
    }
  }

  const getToken = useCallback((): string => {
    return "";
  }, []);

  return {
    getToken,
    handleSignIn,
    handleSignOut,
    actualUser,
    fetchUserLoading: loading,
    isProductFavorite,
  };
}
