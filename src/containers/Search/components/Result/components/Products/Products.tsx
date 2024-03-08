import { Product as ProductClass } from "@modules/product/domain";
import { Product } from "@modules/product/components";

interface Props {
  products: Array<ProductClass>;
  handleSelectProduct(id: string): void;
}

export default function Products({ products, handleSelectProduct }: Props) {
  return (
    <section className="grid lg:grid-cols-3 grid-cols-2 w-full gap-x-7 gap-y-6 esm:grid-cols-1">
      {products.map((p) => (
        <Product
          handleSelectProduct={handleSelectProduct}
          id={p.id}
          image={p.image}
          name={p.name}
          price={p.priceStr}
          provider={p.provider}
          key={p.id}
        />
      ))}
    </section>
  );
}
