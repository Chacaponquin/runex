import { Bag, Close } from "@modules/app/modules/icon/components";
import clsx from "clsx";

interface Props {
  handleAddToCart(): void;
  handleBuyNow(): void;
  isInCart: boolean;
  handleDeleteFromCart(): void;
}

export default function Buttons({
  handleAddToCart,
  handleBuyNow,
  isInCart,
  handleDeleteFromCart,
}: Props) {
  const BUTTON_CLASS = clsx(
    "justify-center items-center flex",
    "w-full",
    "stroke-white",
    "text-white",
    "px-4 py-2",
    "transition-all duration-200 hover:opacity-70",
    "rounded",
    "gap-x-4",

    { "bg-blue-500": !isInCart, "bg-red-400": isInCart }
  );

  return (
    <div className="grid exsm:grid-cols-2 gap-x-4 grid-cols-1 gap-y-2 text-lg esm:text-base">
      <button
        className="rounded bg-black text-white px-4 py-2 w-full font-fontMedium transition-all duration-200 hover:opacity-70"
        onClick={handleBuyNow}
      >
        Comprar ahora
      </button>

      <button
        onClick={isInCart ? handleDeleteFromCart : handleAddToCart}
        className={BUTTON_CLASS}
      >
        {isInCart ? <Close size={18} /> : <Bag size={22} />}
        <p className="font-fontMedium">{isInCart ? "Eliminar" : "Añadir"}</p>
      </button>
    </div>
  );
}
