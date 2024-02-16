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
  const { selectedProduct } = useSection();

  return (
    <div className="flex flex-col w-full">
      <SelectedProduct selectedProduct={selectedProduct} />

      <Navbar />
      <Header />

      <main className="flex flex-col w-full bg-gray-50 pb-6">
        <ProductSections />
      </main>

      <Footer />
    </div>
  );
}
