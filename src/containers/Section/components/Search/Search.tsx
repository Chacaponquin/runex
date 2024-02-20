"use client";

import { Filters, Header, Result } from "./components";
import { useSearch } from "./hooks";

interface Props {
  handleSelectProduct(id: string): void;
  query: string | undefined;
  page: string | undefined;
  min: string | undefined;
  max: string | undefined;
}

export default function Search({
  handleSelectProduct,
  query,
  max,
  min,
  page: queryPage,
}: Props) {
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
    openFilters,
  } = useSearch({ query: query, page: queryPage, max: max, min: min });

  return (
    <div className="flex flex-col w-full">
      {openFilters && <Filters handleClose={handleChangeOpenFilters} />}

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
