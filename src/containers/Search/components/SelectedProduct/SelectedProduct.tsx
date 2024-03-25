"use client";

import { SelectedProduct as SharedSelectedProduct } from "@modules/shared/components";
import { Fragment } from "react";
import { useSelectedProduct } from "./hooks";
import { useProductServices } from "@modules/product/services";

interface Props {
  selectedProduct: string | null;
  handleDeleteSelectedProduct(): void;
  handleSelectProduct(id: string): void;
}

export default function SelectedProduct({
  handleDeleteSelectedProduct,
  handleSelectProduct,
  selectedProduct,
}: Props) {
  const { onFetchSuccess, productInfo } = useSelectedProduct();
  const { getSimilarProducts, getProductById } = useProductServices();

  return (
    <SharedSelectedProduct
      selectedProduct={selectedProduct}
      handleDeleteSelectedProduct={handleDeleteSelectedProduct}
      handleSelectProduct={handleSelectProduct}
      getProduct={getProductById}
      getSimilarProducts={getSimilarProducts}
      onFetchSuccess={onFetchSuccess}
      productInfo={productInfo}
    >
      <Fragment></Fragment>
    </SharedSelectedProduct>
  );
}
