import { OrderProduct } from "@modules/order/domain";
import Image from "next/image";

interface Props {
  products: OrderProduct[];
}

export default function Products({ products }: Props) {
  const rest = products.length - 4;

  return (
    <section className="flex gap-x-1.5 mb-5 items-center">
      {products.slice(0, 4).map((p) => (
        <div key={p.id} className="">
          <Image
            width={70}
            height={70}
            src={p.image}
            alt={p.name}
            className="rounded-sm"
          />
        </div>
      ))}

      {rest > 0 && (
        <span className="rounded-full px-3 py-2.5 bg-gray-100 text-gray-500 font-fontMedium text-sm ml-3">{`+${rest}`}</span>
      )}
    </section>
  );
}
