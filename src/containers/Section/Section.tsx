"use client";

import {
  Footer,
  Header,
  Navbar,
  ProductSections,
  SelectedProduct,
} from "./components";
import { useSection } from "./hooks";

interface Props {
  q: string | undefined;
}

export default function Section({}: Props) {
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

      <main className="flex flex-col w-full bg-gray-50 pb-6">
        <ProductSections handleSelectProduct={handleSelectProduct} />
      </main>

      <Footer />
    </div>
  );
}
