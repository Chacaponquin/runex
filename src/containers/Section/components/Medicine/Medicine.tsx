"use client";

import { Header, ProductSections } from "@containers/Section/shared/components";
import { Footer, Navbar } from "@modules/shared/components";
import { useMedicine } from "./hooks";
import { APP_IMAGES } from "@modules/app/constants";
import { useProductServices } from "@modules/product/services";
import { MedicineSelected } from "./components";

export default function Medicine() {
  const { handleDeleteSelectedProduct, handleSelectProduct, selectedProduct } =
    useMedicine();
  const { getNewProducts, getPopularProducts, getTrendingProducts } =
    useProductServices();

  return (
    <div className="flex flex-col w-full">
      <MedicineSelected
        selectedProduct={selectedProduct}
        handleDeleteSelectedProduct={handleDeleteSelectedProduct}
        handleSelectProduct={handleSelectProduct}
      />
      <Navbar disableSearch={false} fixed={false} />
      <Header image={APP_IMAGES.LANDING.MEDICINE} />
      <ProductSections
        handleSelectProduct={handleSelectProduct}
        getNewProducts={getNewProducts}
        getPopularProducts={getPopularProducts}
        getTrendingProducts={getTrendingProducts}
      />
      <Footer />
    </div>
  );
}
