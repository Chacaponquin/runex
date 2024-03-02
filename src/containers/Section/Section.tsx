"use client";

import { Footer, Navbar, SelectedProduct } from "@modules/shared/components";
import { Header, ProductSections } from "./components";
import { useSection } from "./hooks";


export default function Section() {
  const { selectedProduct, handleSelectProduct, handleDeleteSelectedProduct } =
    useSection();

  return (
    <div className="flex flex-col w-full">
      <SelectedProduct
        selectedProduct={selectedProduct}
        handleDeleteSelectedProduct={handleDeleteSelectedProduct}
      />

      <Navbar />

      <Header />

      <main className="flex flex-col w-full">
        <ProductSections handleSelectProduct={handleSelectProduct} />
      </main>

      <Footer />
    </div>
  );
}
