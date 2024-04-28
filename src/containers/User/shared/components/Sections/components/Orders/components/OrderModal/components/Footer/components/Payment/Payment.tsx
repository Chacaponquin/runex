import { Price, Title } from "./components";

interface Props {
  total: string;
  shipping: string;
  subTotal: string;
  discount: string;
}

export default function Payment({
  shipping,
  subTotal,
  total,
  discount,
}: Props) {
  return (
    <div className="flex flex-col md:order-2 order-1">
      <h2 className="font-fontMedium text-lg mb-2.5">Resumen</h2>

      <div className="grid grid-cols-2 gap-x-20 gap-y-4">
        <Title value="Sub-Total" />
        <Price value={subTotal} />

        <Title value="Descuento" />
        <Price value={discount} />

        <Title value="Envío" />
        <Price value={shipping} />
      </div>

      <div className="border-dashed border-t-[2px] border-gray-400 w-full my-5"></div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-4">
        <Title value="Pedido Total" />
        <Price value={total} />
      </div>
    </div>
  );
}
