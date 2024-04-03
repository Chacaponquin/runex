import React from "react";
import { Header, Products, Scroll } from "./components";
import { Product } from "@modules/product/domain";

interface Props {
  products: Array<Product>;
  handleNextPage(): void;
  handleBackPage(): void;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  handleChangePage(p: number): void;
  loading: boolean;
}

export default function Result({
  products,
  handleBackPage,
  handleNextPage,
  currentPage,
  totalPages,
  totalProducts,
  handleChangePage,
  loading,
}: Props) {
  return (
    <main className="flex flex-col w-full px-5 items-center mb-20 esm:mb-12">
      <div className="flex flex-col w-full max-w-[1100px]">
        <Header length={totalProducts} />

        <Products products={products} loading={loading} />

        <Scroll
          handleNext={handleNextPage}
          handleBack={handleBackPage}
          currentPage={currentPage}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
        />
      </div>
    </main>
  );
}
