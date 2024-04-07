"use client";

import { useProduct } from "./hooks";
import {
  AddButton,
  Name,
  Price,
  Image as ProductImage,
  Provider,
} from "./components";
import { Product as IProduct } from "@modules/product/domain";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  const {
    handleSelect,
    isFavorite,
    handleAddFavorite,
    handleDeleteFavorite,
    isInCart,
    handleDelete,
    handleAdd,
  } = useProduct({
    product: product,
  });

  return (
    <article
      className="flex flex-col rounded-sm bg-white cursor-pointer h-max"
      onClick={handleSelect}
    >
      <ProductImage
        src={product.image}
        handleAddFavorite={handleAddFavorite}
        isFavorite={isFavorite}
        handleDeleteFavorite={handleDeleteFavorite}
      />

      <section className="flex flex-col pt-2.5 pb-4 w-full">
        <Name name={product.name} />

        <div className="flex items-center gap-x-3 mb-3">
          <Price price={product.priceStr} />
          <Provider provider={product.provider} />
        </div>

        <AddButton
          handleAdd={handleAdd}
          isInCart={isInCart}
          handleDelete={handleDelete}
        />
      </section>
    </article>
  );
}
