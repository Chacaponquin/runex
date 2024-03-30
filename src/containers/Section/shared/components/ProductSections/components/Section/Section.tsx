"use client";

import { Product } from "@modules/product/components";
import { Product as ProductClass } from "@modules/product/domain";

interface Props {
  products: Array<ProductClass>;
  title: string;
  handleSelectProduct(id: string): void;
}

export default function Section({
  products,
  title,
  handleSelectProduct,
}: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="font-fontSemiBold text-2xl mb-5">{title}</h1>

      <div className="grid xl:grid-cols-4 grid-cols-2 esm:grid-cols-1 gap-y-4 gap-x-2">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.priceStr}
            id={product.id}
            provider={product.provider}
            handleSelectProduct={handleSelectProduct}
          />
        ))}
      </div>
    </div>
  );
}
