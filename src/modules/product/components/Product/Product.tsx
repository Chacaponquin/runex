"use client";

import { useProduct } from "./hooks";
import {
  AddButton,
  Name,
  Price,
  Image as ProductImage,
  Provider,
} from "./components";
import { PRODUCT_TYPES } from "@modules/product/constants";

interface Props {
  name: string;
  image: string;
  price: string;
  id: string;
  type: PRODUCT_TYPES;
  provider: string;
}

export default function Product({
  name,
  image,
  price,
  id,
  provider,
  type,
}: Props) {
  const {
    handleSelect,
    isFavorite,
    handleAddFavorite,
    handleDeleteFavorite,
    isInCart,
    handleDelete,
  } = useProduct({
    id: id,
    type: type,
  });

  return (
    <article className="flex flex-col rounded bg-white cursor-pointer h-max shadow-md">
      <ProductImage
        src={image}
        handleAddFavorite={handleAddFavorite}
        isFavorite={isFavorite}
        handleDeleteFavorite={handleDeleteFavorite}
      />

      <section className="flex flex-col pt-2.5 pb-4 px-4 w-full">
        <Name name={name} />

        <div className="flex items-center gap-x-3 mb-3">
          <Price price={price} />
          <Provider provider={provider} />
        </div>

        <AddButton
          handleAdd={handleSelect}
          isInCart={isInCart}
          handleDelete={handleDelete}
        />
      </section>
    </article>
  );
}
