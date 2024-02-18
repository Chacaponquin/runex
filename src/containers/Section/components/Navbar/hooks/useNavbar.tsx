"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  query: string | undefined;
}

export default function useNavbar({ query }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState(query ? query : "");

  const [openCart, setOpenCart] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openUserOptions, setOpenUserOptions] = useState(false);

  function handleChangeOpenCart() {
    setOpenCart((prev) => !prev);
  }

  function handleChangeOpenFavorites() {
    setOpenFavorites((prev) => !prev);
  }

  function handleChangeOpenUserOptions() {
    setOpenUserOptions((prev) => !prev);
  }

  function handleSearch() {
    if (search) {
      router.push(`?q=${search}`, { scroll: true });
    }
  }

  function handleChangeSearch(v: string) {
    setSearch(v);
  }

  return {
    handleChangeOpenCart,
    openCart,
    openFavorites,
    openUserOptions,
    handleChangeOpenFavorites,
    handleChangeOpenUserOptions,
    handleSearch,
    search,
    handleChangeSearch,
  };
}
