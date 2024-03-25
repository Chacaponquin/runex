"use client";

import { SelectedProduct } from "@modules/shared/components";
import { useSelectedClothe } from "./hooks";
import {
  useClotheServices,
  useProductServices,
} from "@modules/product/services";
import { Fragment } from "react";
import { Section } from "@modules/shared/components/SelectedProduct/shared/components";
import { Color, Size } from "./components";
import { Product } from "@modules/product/domain";

interface Props {
  selectedProduct: string | null;
  handleDeleteSelectedProduct(): void;
  handleSelectProduct(id: string): void;
}

export default function SelectedClothe({
  handleDeleteSelectedProduct,
  handleSelectProduct,
  selectedProduct,
}: Props) {
  const {
    onFetchSuccess,
    form,
    handleChangeColor,
    handleChangeSize,
    productInfo,
  } = useSelectedClothe();
  const { findById } = useClotheServices();
  const { getSimilarProducts } = useProductServices();

  return (
    <SelectedProduct
      selectedProduct={selectedProduct}
      handleDeleteSelectedProduct={handleDeleteSelectedProduct}
      handleSelectProduct={handleSelectProduct}
      onFetchSuccess={onFetchSuccess}
      getProduct={findById}
      getSimilarProducts={getSimilarProducts}
      productInfo={productInfo}
    >
      <Fragment>
        {productInfo && productInfo.sizes.length > 0 && (
          <Section text="Talla" selected={form.size}>
            <div className="flex gap-x-3">
              {productInfo.sizes.map((s, index) => (
                <Size
                  key={index}
                  size={s}
                  selected={s === form.size}
                  handleChange={() => handleChangeSize(s)}
                />
              ))}
            </div>
          </Section>
        )}

        {productInfo && productInfo.colors.length > 0 && (
          <Section text="Color" selected={form.color}>
            <div className="flex gap-x-3">
              {productInfo.colors.map((c, index) => (
                <Color
                  key={index}
                  handleChange={() => handleChangeColor(c)}
                  color={Product.hexColor(c)}
                  selected={c === form.color}
                />
              ))}
            </div>
          </Section>
        )}
      </Fragment>
    </SelectedProduct>
  );
}
