"use client";

import { Footer, Navbar, SelectedProduct } from "@modules/shared/components";
import { useClothes } from "./hooks";
import { Header, ProductSections } from "@containers/Section/shared/components";
import { APP_IMAGES } from "@modules/app/constants";

export default function Clothes() {
  const { selectedProduct, handleSelectProduct, handleDeleteSelectedProduct } =
    useClothes();

  return (
    <div className="flex flex-col w-full">
      <SelectedProduct
        selectedProduct={selectedProduct}
        handleDeleteSelectedProduct={handleDeleteSelectedProduct}
        handleSelectProduct={handleSelectProduct}
      />
      <Navbar disableSearch={false} fixed={false} />
      <Header image={APP_IMAGES.LANDING.CLOTHES} />
      <ProductSections handleSelectProduct={handleSelectProduct} />
      <Footer />
    </div>
  );
}
