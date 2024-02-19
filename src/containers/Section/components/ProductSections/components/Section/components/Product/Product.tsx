"use client";

import { Favorite } from "@modules/app/modules/icon/components";
import { useProduct } from "./hooks";
import { AddButton, Image as ProductImage } from "./components";

interface Props {
  name: string;
  image: string;
  price: string;
  id: string;
  handleSelectProduct(id: string): void;
}

export default function Product({
  name,
  image,
  price,
  id,
  handleSelectProduct,
}: Props) {
  const { handleAddProduct, handleAddToFavorite, handleSelect } = useProduct({
    id: id,
    handleSelectProduct: handleSelectProduct,
  });

  return (
    <article
      className="flex flex-col rounded bg-white cursor-pointer h-max"
      onClick={handleSelect}
    >
      <ProductImage src={image} handleAddFavorite={handleAddToFavorite} />

      <section className="flex flex-col pt-2.5 pb-4 px-4 w-full">
        <h2 className="font-fontMedium text-lg mb-0.5">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">Amazon</p>

        <div className="flex items-center w-full justify-between gap-x-3">
          <span className="text-blue-500 font-fontMedium text-sm">{price}</span>

          <div className="flex items-center gap-x-3">
            <AddButton handleClick={handleAddProduct} />
          </div>
        </div>
      </section>
    </article>
  );
}
