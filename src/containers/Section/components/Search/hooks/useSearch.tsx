"use client";

import { useEffect, useState } from "react";
import { FilterForm } from "../interfaces";
import { Product } from "@modules/product/domain";
import { useProductServices } from "@modules/product/services";

interface Props {
  query: string | undefined;
}

export default function useSearch({ query }: Props) {
  const { filterProducts } = useProductServices();

  const [openFilters, setOpenFilters] = useState(false);

  const [result, setResult] = useState<Array<Product>>([]);

  const [filters, setFilters] = useState<FilterForm>({
    maxPrice: 0,
    minPrice: 0,
    name: query ? query : "",
    provider: "",
  });

  const [page, setPage] = useState<number>(1);

  const totalPages = 10;

  useEffect(() => {
    filterProducts(filters).then((data) => {
      setResult(data);
    });
  }, [page]);

  function handleChangeFilter(key: keyof FilterForm, value: unknown) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function handleNextPage() {
    setPage((prev) => prev + 1);
  }

  function handleBackPage() {
    setPage((prev) => prev - 1);
  }

  function handleChangePage(p: number) {
    setPage(p);
  }

  function handleApplySearch() {}

  function handleChangeOpenFilters() {
    setOpenFilters((prev) => !prev);
  }

  return {
    filters,
    handleChangeFilter,
    handleApplySearch,
    result,
    openFilters,
    handleChangeOpenFilters,
    handleBackPage,
    handleNextPage,
    totalPages,
    page,
    handleChangePage,
  };
}
