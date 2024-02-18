import React from "react";
import { Header, Products, Scroll } from "./components";
import { Product } from "@modules/product/domain";

interface Props {
  products: Array<Product>;
  handleChangeOpenFilters(): void;
  handleNextPage(): void;
  handleBackPage(): void;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  handleChangePage(p: number): void;
  handleSelectProduct(id: string): void;
}

export default function Result({
  products,
  handleChangeOpenFilters,
  handleBackPage,
  handleNextPage,
  currentPage,
  totalPages,
  totalProducts,
  handleChangePage,
  handleSelectProduct,
}: Props) {
  return (
    <main className="flex flex-col w-full px-5 items-center">
      <div className="flex flex-col w-full max-w-[1100px]">
        <Header
          length={totalProducts}
          handleChangeOpenFilters={handleChangeOpenFilters}
        />

        <Products
          products={products}
          handleSelectProduct={handleSelectProduct}
        />

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
