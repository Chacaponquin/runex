"use client";

import { APP_ROUTES } from "@modules/app/constants";
import { Clothe, Medicine } from "@modules/app/modules/icon/components";
import React, { useId, useState } from "react";
import { SearchSection } from "../interfaces";
import { useRouter } from "next/navigation";
import { PRODUCT_TYPES } from "@modules/product/constants";
import { ClotheParamsUrl, MedicineParamsUrl } from "@modules/product/domain";

export default function useSearch() {
  const navigate = useRouter();

  const [focus, setFocus] = useState(false);
  const [selectedSection, setSelectedSection] = useState(0);
  const [search, setSearch] = useState("");

  const sections: Array<SearchSection> = [
    {
      icon: Clothe,
      searchUrl: APP_ROUTES.SECTION.SEARCH_CLOTHES,
      title: "Ropa",
      type: PRODUCT_TYPES.CLOTHE,
    },
    {
      icon: Medicine,
      searchUrl: APP_ROUTES.SECTION.SEARCH_MEDICINE,
      title: "Medicina",
      type: PRODUCT_TYPES.MEDICINE,
    },
  ];

  const id = useId();

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const selected = sections[selectedSection];

    if (selected.type === PRODUCT_TYPES.CLOTHE) {
      const url = new ClotheParamsUrl().build({ name: search });
      navigate.push(url);
    } else if (selected.type === PRODUCT_TYPES.MEDICINE) {
      const url = new MedicineParamsUrl().build({ name: search });
      navigate.push(url);
    }
  }

  function handleChangeSelectedSection(index: number) {
    setSelectedSection(index);
  }

  function handleChangeSearch(s: string) {
    setSearch(s);
  }

  return {
    handleBlur,
    handleFocus,
    focus,
    id,
    handleSubmit,
    sections,
    selectedSection,
    handleChangeSelectedSection,
    search,
    handleChangeSearch,
  };
}
