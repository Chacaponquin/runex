"use client";

import { Product } from "@modules/product/domain";
import { createContext, useEffect, useState } from "react";
import {
  FilterForm,
  SearchFilterFunctionProps,
  SearchProductParams,
} from "../interfaces";
import { MaxPrice, MinPrice, Page, Provider, Query } from "../value-object";

interface Props {
  openFilters: boolean;
  loading: boolean;
  result: Product[];
  name: string;
  handleCloseFilters(): void;
  handleOpenFilters(): void;
  handleNextPage(): void;
  handleBackPage(): void;
  handleChangePage(p: number): void;
  handleChangeName(n: string): void;
  handleSearchByName(): void;
  filters: FilterForm;
  totalPages: number;
  handleChangeFilter(f: FilterForm): void;
}

export const SearchContext = createContext<Props>({
  openFilters: false,
} as Props);

interface ProviderProps {
  children: React.ReactNode;
  filterFunction(props: SearchFilterFunctionProps): void;
  params: SearchProductParams;
}

export function SearchProvider({
  children,
  filterFunction,
  params,
}: ProviderProps) {
  const [openFilters, setOpenFilters] = useState(false);
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<Product[]>([]);

  const [name, setName] = useState<string>(new Query(params.q).value);

  const [filters, setFilters] = useState<FilterForm>({
    maxPrice: new MaxPrice(params.pMax).value,
    minPrice: new MinPrice(params.pMin).value,
    page: new Page(params.page).value,
    provider: new Provider(params.provider).value,
  });

  useEffect(() => {
    handleSearch();
  }, [filters]);

  function handleSearch() {
    setLoading(true);

    filterFunction({
      body: { ...filters, name: name },
      onSuccess(data) {
        setResult(data);
      },
      onFinally() {
        setLoading(false);
      },
    });
  }

  function handleCloseFilters() {
    setOpenFilters(false);
  }

  function handleOpenFilters() {
    setOpenFilters(true);
  }

  function handleNextPage() {
    setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
  }

  function handleBackPage() {
    setFilters((prev) => ({ ...prev, page: prev.page - 1 }));
  }

  function handleChangePage(p: number) {
    setFilters((prev) => ({ ...prev, page: p }));
  }

  function handleChangeName(name: string) {
    setName(name);
  }

  function handleSearchByName() {
    handleSearch();
  }

  const totalPages = 10;

  function handleChangeFilter(f: FilterForm) {
    setFilters(f);
  }

  const value: Props = {
    handleCloseFilters,
    openFilters,
    handleOpenFilters,
    loading: loading,
    result: result,
    handleBackPage,
    handleChangePage,
    handleNextPage,
    handleChangeName,
    handleSearchByName,
    name,
    filters,
    totalPages: totalPages,
    handleChangeFilter,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
