"use client";

import { Product as IProduct } from "@modules/product/domain";
import { Product } from "./components";

interface Props {
  products: Array<IProduct>;
  title: string;
}

export default function Section({ products, title }: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="font-fontSemiBold text-2xl mb-5">{title}</h1>

      <div className="grid xl:grid-cols-4 grid-cols-2 esm:grid-cols-1 gap-y-5 gap-x-5">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.priceStr}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
