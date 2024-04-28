"use client";

import { SelectedProduct } from "@modules/shared/components";
import { useSelectedClothe } from "./hooks";
import { useClotheServices } from "@modules/product/services";
import { Fragment } from "react";
import { Section } from "@modules/shared/components/SelectedProduct/shared/components";
import { Color, Size } from "./components";

export default function SelectedClothe() {
  const {
    onFetchSuccess,
    form,
    handleChangeColor,
    handleChangeSize,
    productInfo,
    handleAdd,
  } = useSelectedClothe();
  const { findById, getSimilars } = useClotheServices();

  return (
    <SelectedProduct
      onFetchSuccess={onFetchSuccess}
      getProduct={findById}
      getSimilarProducts={getSimilars}
      productInfo={productInfo}
      handleAdd={handleAdd}
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
                  color={"#000000"}
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
