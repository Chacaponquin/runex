"use client";

import { Header, ProductSections } from "@containers/Section/shared/components";
import { Footer, Navbar } from "@modules/shared/components";
import { APP_IMAGES } from "@modules/app/constants";
import { PRODUCT_TYPES } from "@modules/product/constants";
import { useMedicineServices } from "@modules/product/services";

export default function Medicine() {
  const { getNews, getPopular, getTrending } = useMedicineServices();

  return (
    <div className="flex flex-col w-full">
      <Navbar search={{ type: PRODUCT_TYPES.MEDICINE }} fixed={false} />
      <Header image={APP_IMAGES.LANDING.MEDICINE} />
      <ProductSections
        getNewProducts={getNews}
        getPopularProducts={getPopular}
        getTrendingProducts={getTrending}
      />
      <Footer />
    </div>
  );
}
