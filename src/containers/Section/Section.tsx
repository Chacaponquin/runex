"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import {
  Footer,
  Header,
  Navbar,
  ProductSections,
  Search,
  SelectedProduct,
} from "./components";
import { useSection } from "./hooks";

interface Props {
  q: string | undefined;
}

export default function Section({ q: query }: Props) {
  const { selectedProduct, handleSelectProduct, handleDeleteSelectedProduct } =
    useSection();

  useBlockScroll(selectedProduct !== null);

  return (
    <div className="flex flex-col w-full">
      <SelectedProduct
        selectedProduct={selectedProduct}
        handleDeleteSelectedProduct={handleDeleteSelectedProduct}
      />

      <Navbar query={query} />

      {!query && <Header />}

      <main className="flex flex-col w-full">
        {query ? (
          <Search handleSelectProduct={handleSelectProduct} query={query} />
        ) : (
          <ProductSections handleSelectProduct={handleSelectProduct} />
        )}
      </main>

      <Footer />
    </div>
  );
}
