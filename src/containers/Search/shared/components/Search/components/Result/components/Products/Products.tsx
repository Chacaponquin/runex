import { Product as ProductClass } from "@modules/product/domain";
import { Product, ProductLoader } from "@modules/product/components";

interface Props {
  products: Array<ProductClass>;
  loading: boolean;
  empty: boolean;
}

export default function Products({ products, loading, empty }: Props) {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-x-5 gap-y-5 grid-cols-1">
      {loading && <ProductLoader size={9} />}
      {!empty && products.map((p) => <Product product={p} key={p.id} />)}
    </section>
  );
}
