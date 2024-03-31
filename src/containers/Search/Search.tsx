"use client";

import { Footer, Navbar } from "@modules/shared/components";
import { Filters, Header, Result } from "./components";
import { useSearch } from "./hooks";

interface Props {
  q: string | undefined;
  page: string | undefined;
  min: string | undefined;
  max: string | undefined;
  color: string | undefined;
  size: string | undefined;
  provider: string | undefined;
}

export default function Search({
  q,
  max,
  min,
  page: queryPage,
  color,
  size,
  provider,
}: Props) {
  const {
    filters,
    handleApplySearch,
    result,
    handleChangeOpenFilters,
    handleBackPage,
    handleNextPage,
    totalPages,
    page,
    handleChangePage,
    openFilters,
    handleChangeName,
  } = useSearch({
    query: q,
    page: queryPage,
    max: max,
    min: min,
    color: color,
    size: size,
    provider: provider,
  });

  return (
    <div className="flex flex-col w-full">
      <Navbar fixed={false} />

      {openFilters && (
        <Filters
          handleClose={handleChangeOpenFilters}
          filters={filters}
          handleSubmit={handleApplySearch}
        />
      )}

      <Header
        handleApplySearch={handleApplySearch}
        search={filters.name}
        handleChangeSearch={handleChangeName}
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
      />

      <Footer />
    </div>
  );
}
