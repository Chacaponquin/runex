"use client";

import React from "react";
import Image from "next/image";
import { Favorite } from "@modules/app/modules/icon/components";
import { useProduct } from "./hooks";

interface Props {
  name: string;
  image: string;
  price: string;
  id: string;
}

export default function Product({ name, image, price, id }: Props) {
  const { handleAddProduct, handleAddToFavorite } = useProduct({ id: id });

  return (
    <article className="flex flex-col rounded bg-white w-[250px]">
      <Image
        src={image}
        alt={name}
        width={200}
        height={100}
        className="object-cover rounded-t w-full h-[170px]"
      />

      <section className="flex flex-col py-2.5 px-4 w-full">
        <h2 className="font-fontMedium text-lg mb-0.5">{name}</h2>
        <p className="text-sm text-gray-500 mb-2">Amazon</p>

        <div className="flex items-center w-full justify-between gap-x-3">
          <span className="text-blue-500 font-fontMedium text-sm">{price}</span>

          <div className="flex items-center gap-x-3">
            <button
              className="hover:stroke-blue-500 stroke-black transition-all duration-200"
              onClick={handleAddToFavorite}
            >
              <Favorite size={18} />
            </button>

            <button
              className="bg-gray-100 text-black text-sm px-3 py-1 rounded font-fontMedium"
              onClick={handleAddProduct}
            >
              Add to bag
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
