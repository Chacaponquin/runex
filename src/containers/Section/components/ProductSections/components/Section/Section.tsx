import { Product as IProduct } from "@modules/product/domain";
import React from "react";
import { Product } from "./components";

interface Props {
  products: Array<IProduct>;
  title: string;
}

export default function Section({ products, title }: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="font-fontSemiBold text-xl mb-5">{title}</h1>

      <div className="flex flex-col gap-y-5">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.priceStr}
          />
        ))}
      </div>
    </div>
  );
}
