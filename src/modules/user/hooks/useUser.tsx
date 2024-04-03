"use client";

import { TOKEN_LOCATION } from "../constants";
import { useContext } from "react";
import { UserContext } from "../context";
import { useLocalStorage } from "@modules/shared/hooks";
import { STORAGE_KEYS } from "@modules/app/constants";

export default function useUser() {
  const { get } = useLocalStorage();

  const {
    actualUser,
    loading,
    handleAddProductToFavorites: handleAddProductToFavoritesContext,
    handleDeleteProductInFavorites: handleDeleteProductInFavoritesContext,
  } = useContext(UserContext);

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

  function handleAddProductToFavorites(productId: string) {
    handleAddProductToFavoritesContext(productId);
  }

  function handleDeleteProductInFavorites(productId: string) {
    handleDeleteProductInFavoritesContext(productId);
  }

  function getAccessToken(): string {
    const token = get(STORAGE_KEYS.ACCESS_TOKEN);

    return token || "";
  }

  return {
    getAccessToken,
    handleSignIn,
    handleSignOut,
    actualUser,
    fetchUserLoading: loading,
    isProductFavorite,
    handleAddProductToFavorites,
    handleDeleteProductInFavorites,
  };
}
