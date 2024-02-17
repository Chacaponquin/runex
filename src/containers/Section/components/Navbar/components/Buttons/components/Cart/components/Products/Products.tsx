import { CartProduct } from "@modules/cart/domain";
import React from "react";
import { Product } from "./components";

interface Props {
  products: Array<CartProduct>;
}

export default function Products({ products }: Props) {
  return (
    <section className="flex flex-col w-full gap-y-2 mb-4">
      {products.map((product) => (
        <Product
          key={product.product.id}
          quantity={product.quantity}
          image={product.product.image}
          name={product.product.name}
          price={product.product.priceStr}
          id={product.product.id}
        />
      ))}
    </section>
  );
}
