"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  query: string | undefined;
}

export default function useNavbar({ query }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState(query ? query : "");
  const [openSide, setOpenSide] = useState(false);

  function handleSearch() {
    if (search) {
      router.push(`?q=${search}`, { scroll: true });
    }
  }

  function handleChangeSearch(v: string) {
    setSearch(v);
  }

  function handleOpenSide() {
    setOpenSide(true);
  }

  function handleCloseSide() {
    setOpenSide(false);
  }

  return {
    handleSearch,
    search,
    handleChangeSearch,
    openSide,
    handleCloseSide,
    handleOpenSide,
  };
}
