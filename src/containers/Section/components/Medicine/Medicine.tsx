"use client";

import { Header, ProductSections } from "@containers/Section/shared/components";
import { Footer, Navbar } from "@modules/shared/components";
import { APP_IMAGES } from "@modules/app/constants";
import { useProductServices } from "@modules/product/services";

export default function Medicine() {
  const { getNewProducts, getPopularProducts, getTrendingProducts } =
    useProductServices();

  return (
    <div className="flex flex-col w-full">
      <Navbar disableSearch={false} fixed={false} />
      <Header image={APP_IMAGES.LANDING.MEDICINE} />
      <ProductSections
        getNewProducts={getNewProducts}
        getPopularProducts={getPopularProducts}
        getTrendingProducts={getTrendingProducts}
      />
      <Footer />
    </div>
  );
}
