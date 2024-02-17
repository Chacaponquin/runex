"use client";

import { Counter, Image } from "./components";
import { useProduct } from "./hooks";

interface Props {
  quantity: number;
  image: string;
  name: string;
  price: string;
  id: string;
}

export default function Product({ quantity, name, image, price, id }: Props) {
  const { handleDecreaseQuantity, handleIncreaseQuantity } = useProduct({
    id: id,
    quantity: quantity,
  });

  return (
    <div className="flex w-full px-2.5 py-2 gap-x-5 rounded-xl border-[2px] border-gray-100">
      <Image src={image} alt={name} />

      <div className="flex flex-col text-left w-full">
        <h2 className="font-fontSemiBold text-base">{name}</h2>
        <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor sit.</p>

        <div className="flex justify-between items-center">
          <span className="text-sm">{price}</span>
          <Counter
            quantity={quantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            disableDecrease={quantity === 0}
            disableIncrease={false}
          />
        </div>
      </div>
    </div>
  );
}
