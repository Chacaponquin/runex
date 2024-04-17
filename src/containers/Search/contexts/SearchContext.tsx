"use client";

import { Product } from "@modules/product/domain";
import { createContext, useEffect, useState } from "react";
import { FilterForm, SearchFilterFunctionProps } from "../interfaces";
import { SearchProductParams } from "@modules/product/interfaces/params";
import {
  MaxPrice,
  MinPrice,
  Order,
  Page,
  Query,
} from "@modules/product/value-object";

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

  const [name, setName] = useState<string>(new Query().toValue(params.q));

  const [filters, setFilters] = useState<FilterForm>({
    maxPrice: new MaxPrice().toValue(params.pMax),
    minPrice: new MinPrice().toValue(params.pMin),
    page: new Page().toValue(params.page),
    order: new Order().toValue(params.order),
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
    handleTopScrool().then(() =>
      setFilters((prev) => ({ ...prev, page: prev.page + 1 }))
    );
  }

  function handleBackPage() {
    handleTopScrool().then(() =>
      setFilters((prev) => ({ ...prev, page: prev.page - 1 }))
    );
  }

  function handleChangePage(p: number) {
    handleTopScrool().then(() => setFilters((prev) => ({ ...prev, page: p })));
  }

  function handleTopScrool() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return new Promise((resolve) => setTimeout(resolve, 1000));
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
