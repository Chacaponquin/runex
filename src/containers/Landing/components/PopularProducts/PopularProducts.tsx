import React from "react";
import { Header, Products } from "./components";
import { Product } from "@modules/product/domain";

interface Props {
  products: Array<Product>;
}

export default function PopularProducts({ products }: Props) {
  return (
    <section className="flex flex-col">
      <Header />
      <Products products={products} />
    </section>
  );
}
