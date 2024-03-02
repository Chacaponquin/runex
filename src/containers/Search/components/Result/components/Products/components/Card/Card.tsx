"use client";

import { AddButton, Name, Price, Image as ProductImage } from "./components";
import { useCard } from "./hooks";

interface Props {
  image: string;
  name: string;
  price: string;
  handleClick(): void;
  id: string;
}

export default function Card({ image, name, price, handleClick, id }: Props) {
  const { handleAddFavorite, isFavorite } = useCard({
    id: id,
  });

  return (
    <article className="flex flex-col w-full cursor-pointer">
      <ProductImage
        src={image}
        handleAddFavorite={handleAddFavorite}
        isFavorite={isFavorite}
      />

      <div className="flex flex-col pt-2">
        <Name name={name} />

        <div className="flex gap-x-4 items-center mb-3">
          <Price price={price} />
        </div>

        <AddButton handleClick={handleClick} />
      </div>
    </article>
  );
}
