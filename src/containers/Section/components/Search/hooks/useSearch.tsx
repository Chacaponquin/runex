"use client";

import { useEffect, useState } from "react";
import { FilterForm } from "../interfaces";
import { Product } from "@modules/product/domain";
import { useProductServices } from "@modules/product/services";
import {
  Color,
  MaxPrice,
  MinPrice,
  Page,
  Provider,
  Query,
  Size,
} from "@containers/Section/value-object";

interface Props {
  query: string | undefined;
  page: string | undefined;
  min: string | undefined;
  max: string | undefined;
  provider: string | undefined;
  color: string | undefined;
  size: string | undefined;
}

export default function useSearch({
  query,
  max,
  min,
  page: ipage,
  provider,
  color,
  size,
}: Props) {
  const { filterProducts } = useProductServices();

  const [openFilters, setOpenFilters] = useState(false);

  const [result, setResult] = useState<Array<Product>>([]);

  const [filters, setFilters] = useState<FilterForm>({
    maxPrice: new MaxPrice(max).value,
    minPrice: new MinPrice(min).value,
    name: new Query(query).value,
    provider: new Provider(provider).value,
    color: new Color(color).value,
    size: new Size(size).value,
  });

  const [page, setPage] = useState<number>(new Page(ipage).value);

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

  function handleApplySearch() {
    setOpenFilters(false);
  }

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
