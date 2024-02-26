import { Bag } from "@modules/app/modules/icon/components";

interface Props {
  handleAddToCart(): void;
  handleBuyNow(): void;
}

export default function Buttons({ handleAddToCart, handleBuyNow }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-4 exsm:grid-cols-1 gap-y-2">
      <button
        className="rounded bg-black text-white text-lg px-4 py-2 w-full font-fontMedium transition-all duration-200 hover:opacity-70"
        onClick={handleBuyNow}
      >
        Comprar ahora
      </button>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 text-lg text-white rounded px-4 py-2 flex gap-x-4 stroke-white justify-center items-center transition-all duration-200 hover:opacity-70"
      >
        <Bag size={22} />
        <p className="font-fontMedium">Añadir</p>
      </button>
    </div>
  );
}
