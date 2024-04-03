import { Product as ProductClass } from "@modules/product/domain";
import { Product, ProductLoader } from "@modules/product/components";
import { Fragment } from "react";

interface Props {
  products: Array<ProductClass>;
  loading: boolean;
}

export default function Products({ products, loading }: Props) {
  return (
    <section className="grid lg:grid-cols-3 grid-cols-2 w-full gap-x-2 gap-y-5 esm:grid-cols-1">
      {loading ? (

            <ProductLoader size={8} />
      
      ) : (
        <Fragment>
          {products.map((p) => (
            <Product
              id={p.id}
              type={p.type}
              image={p.image}
              name={p.name}
              price={p.priceStr}
              provider={p.provider}
              key={p.id}
            />
          ))}
        </Fragment>
      )}
    </section>
  );
}
