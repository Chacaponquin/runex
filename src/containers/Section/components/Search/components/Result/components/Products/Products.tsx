import { Product } from "@modules/product/domain";
import React from "react";
import { Card } from "./components";

interface Props {
  products: Array<Product>;
  handleSelectProduct(id: string): void;
}

export default function Products({ products, handleSelectProduct }: Props) {
  return (
    <section className="grid grid-cols-3 w-full gap-x-7 gap-y-6">
      {products.map((p) => (
        <Card
          key={p.id}
          image={p.image}
          id={p.id}
          name={p.name}
          price={p.priceStr}
          handleClick={() => handleSelectProduct(p.id)}
        />
      ))}
    </section>
  );
}
