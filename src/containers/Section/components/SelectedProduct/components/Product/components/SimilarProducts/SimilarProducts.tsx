"use client";

import { Product as ProductClass } from "@modules/product/domain";
import { Header, Product } from "./components";

interface Props {
  products: Array<ProductClass>;
  loading: boolean;
}

export default function SimilarProducts({ products }: Props) {
  return (
    <div className="flex flex-col w-full">
      <Header />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-x-7 gap-x-4 esm:gap-x-3 gap-y-6 esm:gap-y-3">
        {products.map((p) => (
          <Product key={p.id} name={p.name} image={p.image} />
        ))}
      </div>
    </div>
  );
}
