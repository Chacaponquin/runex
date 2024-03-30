"use client";

import { APP_ROUTES } from "@modules/app/constants";
import { Clothe, Medicine } from "@modules/app/modules/icon/components";
import React, { useId, useState } from "react";
import { SearchSection } from "../interfaces";
import { useRouter } from "next/navigation";

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
    },
    {
      icon: Medicine,
      searchUrl: APP_ROUTES.SECTION.SEARCH_MEDICINE,
      title: "Medicina",
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

    const route = APP_ROUTES.SECTION.BUILD_SEARCH_ROUTE({
      url: selected.searchUrl,
      search: search,
    });

    navigate.push(route);
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
