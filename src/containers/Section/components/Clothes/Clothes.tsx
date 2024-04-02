"use client";

import { Footer, Navbar } from "@modules/shared/components";
import { Header, ProductSections } from "@containers/Section/shared/components";
import { APP_IMAGES } from "@modules/app/constants";
import { useClotheServices } from "@modules/product/services";
import { PRODUCT_TYPES } from "@modules/product/constants";

export default function Clothes() {
  const { getNews, getPopular, getTrending } = useClotheServices();

  return (
    <div className="flex flex-col w-full">
      <Navbar search={{ type: PRODUCT_TYPES.CLOTHE }} fixed={false} />
      <Header image={APP_IMAGES.LANDING.CLOTHES} />
      <ProductSections
        getNewProducts={getNews}
        getPopularProducts={getPopular}
        getTrendingProducts={getTrending}
      />
      <Footer />
    </div>
  );
}
