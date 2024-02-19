"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import { Product, Header } from "./components";
import { useSelectedProduct } from "./hooks";

interface Props {
  selectedProduct: string | null;
  handleDeleteSelectedProduct(): void;
}

export default function SelectedProduct({
  selectedProduct,
  handleDeleteSelectedProduct,
}: Props) {
  const { productInfo, loading, similarProducts, similarProductsLoading } =
    useSelectedProduct({
      productId: selectedProduct,
    });

  useBlockScroll(selectedProduct !== null);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-50 bg-black/50 flex flex-col"
      style={{ visibility: selectedProduct ? "visible" : "hidden" }}
    >
      <Header handleDeleteSelectedProduct={handleDeleteSelectedProduct} />
      <Product
        info={productInfo}
        loading={loading}
        similarProducts={similarProducts}
        similarProductsLoading={similarProductsLoading}
      />
    </div>
  );
}
