"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { NavbarLink } from "../interfaces";
import { useSections } from "@modules/app/hooks";
import { PRODUCT_TYPES } from "@modules/product/constants";
import { ClotheParamsUrl, MedicineParamsUrl } from "@modules/product/domain";

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
      if (type === PRODUCT_TYPES.CLOTHE) {
        const url = new ClotheParamsUrl().build({ name: search });
        router.push(url);
      } else if (type === PRODUCT_TYPES.MEDICINE) {
        const url = new MedicineParamsUrl().build({ name: search });
        router.push(url);
      }
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
