import React from "react";
import { Product as DomainProduct } from "@modules/product/domain";
import { Product } from "./components";

interface Props {
  products: Array<DomainProduct>;
}

export default function Products({ products }: Props) {
  return (
    <div className="grid grid-cols-4 w-full gap-x-2">
      {products.map((p) => (
        <Product key={p.id} name={p.name} price={p.priceStr} image={p.image} />
      ))}
    </div>
  );
}
