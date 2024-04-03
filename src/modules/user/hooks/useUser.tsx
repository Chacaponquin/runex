"use client";

import { useContext } from "react";
import { UserContext } from "../context";
import { useLocalStorage } from "@modules/shared/hooks";
import { STORAGE_KEYS } from "@modules/app/constants";
import { RespUserDTO } from "../dto/user";

interface SignInProps {
  user: RespUserDTO;
  save: boolean;
}

export default function useUser() {
  const { get, set, remove } = useLocalStorage();

  const {
    actualUser,
    loading,
    handleAddProductToFavorites: handleAddProductToFavoritesContext,
    handleDeleteProductInFavorites: handleDeleteProductInFavoritesContext,
    handleChangeUser,
    handleRemoveUser,
  } = useContext(UserContext);

  function handleSignIn({ save, user }: SignInProps) {
    if (save) {
      set(STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
      set(STORAGE_KEYS.REFRESH_TOKEN, user.refreshToken);
    }

    handleChangeUser({
      email: user.email,
      favorites: user.favorites,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
    });
  }

  function handleSignOut() {
    remove(STORAGE_KEYS.ACCESS_TOKEN);
    remove(STORAGE_KEYS.REFRESH_TOKEN);
    handleRemoveUser();
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
