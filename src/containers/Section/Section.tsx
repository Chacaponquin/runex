"use client";

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
  page: string | undefined;
  min: string | undefined;
  max: string | undefined;
  color: string | undefined;
  size: string | undefined;
  provider: string | undefined;
}

export default function Section({
  q: query,
  max,
  min,
  page,
  color,
  size,
  provider,
}: Props) {
  const {
    selectedProduct,
    handleSelectProduct,
    handleDeleteSelectedProduct,
    handleChangeOpenCart,
    openCart,
  } = useSection();

  return (
    <div className="flex flex-col w-full">
      <SelectedProduct
        selectedProduct={selectedProduct}
        handleDeleteSelectedProduct={handleDeleteSelectedProduct}
      />

      <Navbar
        query={query}
        openCart={openCart}
        handleChangeOpenCart={handleChangeOpenCart}
        isSearch={Boolean(query)}
      />

      {!query && <Header />}

      <main className="flex flex-col w-full">
        {query ? (
          <Search
            handleSelectProduct={handleSelectProduct}
            query={query}
            page={page}
            min={min}
            max={max}
            provider={provider}
            color={color}
            size={size}
          />
        ) : (
          <ProductSections handleSelectProduct={handleSelectProduct} />
        )}
      </main>

      <Footer />
    </div>
  );
}
