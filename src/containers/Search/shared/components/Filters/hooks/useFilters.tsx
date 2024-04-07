"use client";

import { useClothes } from "@modules/product/hooks";
import { useContext, useState } from "react";
import { FilterForm } from "@containers/Search/interfaces";
import { SearchContext } from "@containers/Search/contexts";

interface ProviderOption {
  id: string;
  name: string;
}

export default function useFilters() {
  const { filters, handleChangeFilter } = useContext(SearchContext);
  const { providers } = useClothes();

  const [form, setForm] = useState<FilterForm>(filters);

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    handleChangeFilter(form);
  }

  function handleChangePriceMin(value: number) {
    setForm((prev) => ({ ...prev, priceMin: value }));
  }

  function handleChangePriceMax(value: number) {
    setForm((prev) => ({ ...prev, priceMax: value }));
  }

  const providerOptions: Array<ProviderOption> = providers.map((p, index) => ({
    id: String(index),
    name: p.name,
  }));

  return {
    form,
    handleSubmitForm,
    providerOptions,
    handleChangePriceMax,
    handleChangePriceMin,
  };
}
