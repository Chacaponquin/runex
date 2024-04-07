"use client";

import { Product } from "@modules/product/components";
import { useSection } from "./hooks";
import { BodyProps } from "@modules/app/modules/http/interfaces";
import { Product as IProduct } from "@modules/product/domain";
import { GetSpecificProductsDTO } from "@modules/product/dto/product";
import { Loader } from "./components";

interface Props {
  getProducts(props: BodyProps<Array<IProduct>, GetSpecificProductsDTO>): void;
  title: string;
}

export default function Section({ title, getProducts }: Props) {
  const { products, loading } = useSection({ getProducts });

  return (
    <div className="flex flex-col">
      <h1 className="font-fontMedium text-2xl mb-3.5">{title}</h1>

      <div className="grid xl:grid-cols-4 grid-cols-2 esm:grid-cols-1 gap-y-4 gap-x-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}

        {loading && <Loader />}
      </div>
    </div>
  );
}
