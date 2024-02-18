"use client";

import NextImage from "next/image";
import { AddButton, Image as ProductImage } from "./components";
import { useCard } from "./hooks";

interface Props {
  image: string;
  name: string;
  price: string;
  handleClick(): void;
  id: string;
}

export default function Card({ image, name, price, handleClick, id }: Props) {
  const { handleAddToCart, handleAddFavorite } = useCard({ id: id });

  return (
    <article
      className="flex flex-col w-full cursor-pointer"
      onClick={handleClick}
    >
      <ProductImage src={image} handleAddFavorite={handleAddFavorite} />

      <div className="flex flex-col pt-2">
        <h2 className="font-fontSemiBold text-lg mb-4">{name}</h2>

        <div className="flex items-center w-full justify-between">
          <span className="text-base font-fontMedium text-blue-500">
            {price}
          </span>

          <AddButton handleClick={handleAddToCart} />
        </div>
      </div>
    </article>
  );
}
