"use client";

import { Header, Result } from "./components";
import { useSearch } from "./hooks";

interface Props {
  handleSelectProduct(id: string): void;
  query: string | undefined;
}

export default function Search({ handleSelectProduct, query }: Props) {
  const {
    filters,
    handleApplySearch,
    handleChangeFilter,
    result,
    handleChangeOpenFilters,
    handleBackPage,
    handleNextPage,
    totalPages,
    page,
    handleChangePage,
  } = useSearch({ query });

  return (
    <div className="flex flex-col w-full">
      <Header
        handleApplySearch={handleApplySearch}
        search={filters.name}
        handleChangeSearch={(value) => handleChangeFilter("name", value)}
      />

      <Result
        totalProducts={result.length}
        products={result}
        handleChangeOpenFilters={handleChangeOpenFilters}
        handleNextPage={handleNextPage}
        handleBackPage={handleBackPage}
        currentPage={page}
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        handleSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
