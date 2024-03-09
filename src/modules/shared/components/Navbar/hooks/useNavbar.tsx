"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavbarLink } from "../interfaces";
import { useSections } from "@modules/app/hooks";

interface Props {
  query: string | undefined;
}

export default function useNavbar({ query }: Props) {
  const { sections } = useSections();

  const router = useRouter();

  const [search, setSearch] = useState(query ? query : "");
  const [openSide, setOpenSide] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const links: Array<NavbarLink> = sections;

  function handleSearch() {
    if (search) {
      router.push(`clothes/search?q=${search}`, { scroll: true });
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

  function handleChangeOpenCart() {
    setOpenCart((prev) => !prev);
  }

  return {
    handleSearch,
    search,
    handleChangeSearch,
    openSide,
    handleCloseSide,
    handleOpenSide,
    openCart,
    handleChangeOpenCart,
    links,
  };
}
