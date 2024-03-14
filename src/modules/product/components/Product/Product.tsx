"use client";

import { useProduct } from "./hooks";
import {
  AddButton,
  Name,
  Price,
  Image as ProductImage,
  Provider,
} from "./components";

interface Props {
  name: string;
  image: string;
  price: string;
  id: string;
  handleSelectProduct(id: string): void;
  provider: string;
}

export default function Product({
  name,
  image,
  price,
  id,
  handleSelectProduct,
  provider,
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
    handleSelectProduct: handleSelectProduct,
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
