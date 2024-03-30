"use client";

import { Product as ProductClass } from "@modules/product/domain";
import { Header, Loading, Product } from "./components";
import { useSelectProduct } from "@modules/product/hooks";

interface Props {
  products: Array<ProductClass>;
  loading: boolean;
}

export default function SimilarProducts({ products, loading }: Props) {
  const { handleSelectProduct } = useSelectProduct();

  return (
    <div className="flex flex-col w-full">
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-4 gap-x-4 esm:gap-x-2">
          {products.map((p) => (
            <Product
              key={p.id}
              name={p.name}
              image={p.image}
              price={p.priceStr}
              provider={p.provider}
              handleClick={() =>
                handleSelectProduct({ id: p.id, type: p.type })
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
