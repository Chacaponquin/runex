"use client";

import { Footer, Navbar } from "@modules/shared/components";
import { Header, Result } from "./components";
import { useSearch } from "@containers/Search/hooks";

interface Props {
  children: React.ReactNode;
  product: string;
}

export default function Search({ children: filter, product }: Props) {
  const {
    loading,
    openFilters,
    handleBackPage,
    handleChangeName,
    handleChangePage,
    handleNextPage,
    handleSearchByName,
    name,
    result,
    filters,
    totalPages,
  } = useSearch();

  return (
    <div className="flex flex-col w-full">
      <Navbar fixed={false} />

      {openFilters && filter}

      <Header
        handleChangeSearch={handleChangeName}
        handleApplySearch={handleSearchByName}
        search={name}
        product={product}
      />

      <Result
        totalProducts={result.length}
        products={result}
        handleNextPage={handleNextPage}
        handleBackPage={handleBackPage}
        currentPage={filters.page}
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        loading={loading}
      />

      <Footer />
    </div>
  );
}
