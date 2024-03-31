"use client";

import { useContext } from "react";
import { SearchContext } from "../contexts";

export default function useSearch() {
  const {
    openFilters,
    loading,
    handleBackPage,
    handleChangeName,
    handleChangePage,
    handleCloseFilters,
    handleNextPage,
    handleOpenFilters,
    handleSearchByName,
    name,
    result,
    filters,
    totalPages,
  } = useContext(SearchContext);

  return {
    openFilters,
    loading,
    handleBackPage,
    handleChangeName,
    handleChangePage,
    handleCloseFilters,
    handleNextPage,
    handleOpenFilters,
    handleSearchByName,
    name,
    result,
    filters,
    totalPages,
  };
}
