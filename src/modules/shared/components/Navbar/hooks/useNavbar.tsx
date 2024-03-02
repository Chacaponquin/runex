"use client";

import { APP_ROUTES } from "@modules/app/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavbarLink } from "../interfaces";

interface Props {
  query: string | undefined;
}

export default function useNavbar({ query }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState(query ? query : "");
  const [openSide, setOpenSide] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const links: Array<NavbarLink> = [
    { label: "Ropa", url: APP_ROUTES.SECTION.CLOTHES, sections: [] },
    { label: "Medicamentos", url: APP_ROUTES.SECTION.MEDICINE, sections: [] },
  ];

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

  function handleChangeOpenUserMenu() {
    setOpenUserMenu((prev) => !prev);
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
    openUserMenu,
    handleChangeOpenUserMenu,
  };
}
