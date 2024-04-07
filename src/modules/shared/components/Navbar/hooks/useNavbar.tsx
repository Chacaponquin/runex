"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavbarLink } from "../interfaces";
import { useSections } from "@modules/app/hooks";
import { PRODUCT_TYPES } from "@modules/product/constants";
import { APP_ROUTES } from "@modules/app/constants";

interface Props {
  type: PRODUCT_TYPES | undefined;
}

export default function useNavbar({ type }: Props) {
  const { sections } = useSections();

  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const [openSide, setOpenSide] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const links: Array<NavbarLink> = sections;

  function handleSearch() {
    if (search && type) {
      const route = APP_ROUTES.SECTION.BUILD_SEARCH_ROUTE({
        section: type,
        search: search,
      });

      router.push(route, { scroll: true });
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
