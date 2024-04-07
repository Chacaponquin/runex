"use client";

import { Product, ProductLoader } from "@modules/product/components";
import { useFavorites } from "./hooks";
import { Empty, Header } from "../../shared/components";

export default function Favorites() {
  const { loading, products } = useFavorites();

  const empty = !loading && products.length === 0;

  return (
    <div className="flex flex-col w-full">
      {!empty && <Header text="Favoritos" />}

      {empty && <Empty text="Todavía no tienes productos favoritos" />}

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-3 w-full">
        {!loading && products.map((p) => <Product product={p} key={p.id} />)}

        {loading && <ProductLoader size={8} />}
      </div>
    </div>
  );
}
