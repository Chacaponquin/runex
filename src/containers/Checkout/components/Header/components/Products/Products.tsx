import { useCart } from "@modules/cart/hooks";
import { Bill, Th, Tr } from "./components";

export default function Products() {
  const { cart } = useCart();

  return (
    <div className="bg-white p-1.5 shadow-lg rounded-lg translate-y-10">
      <table className="table-auto w-full rounded">
        <thead className="bg-gray-50 rounded">
          <tr>
            <Th text="Producto" />
            <Th text="Precio" />
            <Th text="Acciones" />
          </tr>
        </thead>

        <tbody>
          {cart.map((p) => (
            <Tr
              key={p.product.id}
              quantity={p.quantity}
              image={p.product.image}
              name={p.product.name}
              id={p.product.id}
            />
          ))}
        </tbody>
      </table>

      <Bill />
    </div>
  );
}
