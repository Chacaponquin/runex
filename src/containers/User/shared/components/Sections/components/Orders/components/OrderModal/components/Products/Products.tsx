import { OrderProduct } from "@modules/order/domain";
import { Product, Th, Value } from "./components";

interface Props {
  products: OrderProduct[];
}

export default function Products({ products }: Props) {
  const columns = ["Producto", "Cantidad", "Precio", "Total"];

  return (
    <section className="w-full mb-10 overflow-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {columns.map((c, index) => (
              <Th key={index} text={c} first={index === 0} />
            ))}
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="">
              <Product first={true} name={p.name} image={p.image} />
              <Value value={p.quantity} />
              <Value value={p.priceStr} />
              <Value value={p.totalStr} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
