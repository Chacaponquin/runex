"use client";

import { useContext, useMemo, useState } from "react";
import { FilterForm } from "@containers/Search/interfaces";
import { SearchContext } from "@containers/Search/contexts";
import { Order } from "@modules/product/value-object";

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

  function handleChangeOrder(url: string) {
    const found = Order.options.find((o) => o.url === url);

    if (found) {
      setForm((prev) => ({ ...prev, order: found.type }));
    }
  }

  const orderSelect = useMemo(() => {
    return Order.options.find((o) => o.type === form.order);
  }, [form]);

  return {
    form,
    handleSubmitForm,
    handleChangePriceMax,
    handleChangePriceMin,
    handleChangeOrder,
    orderSelect,
  };
}
