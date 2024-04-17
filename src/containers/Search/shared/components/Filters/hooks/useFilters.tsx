"use client";

import { useContext, useState } from "react";
import { FilterForm } from "@containers/Search/interfaces";
import { SearchContext } from "@containers/Search/contexts";

export default function useFilters() {
  const { filters, handleChangeFilter, handleCloseFilters } =
    useContext(SearchContext);

  const [form, setForm] = useState<FilterForm>(filters);

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    handleChangeFilter(form);
    handleCloseFilters();
  }

  function handleChangePriceMin(value: number) {
    setForm((prev) => ({ ...prev, minPrice: value }));
  }

  function handleChangePriceMax(value: number) {
    setForm((prev) => ({ ...prev, maxPrice: value }));
  }
  return {
    form,
    handleSubmitForm,
    handleChangePriceMax,
    handleChangePriceMin,
  };
}
