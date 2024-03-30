"use client";

import { SelectedProduct } from "@modules/shared/components";
import { useSelectedMedicine } from "./hooks";
import { Fragment } from "react";
import {
  useMedicineServices,
  useProductServices,
} from "@modules/product/services";

interface Props {
  selectedProduct: string | null;
  handleDeleteSelectedProduct(): void;
  handleSelectProduct(id: string): void;
}

export default function MedicineSelected({
  handleDeleteSelectedProduct,
  handleSelectProduct,
  selectedProduct,
}: Props) {
  const { onFetchSuccess, productInfo, handleAdd } = useSelectedMedicine();
  const { getSimilarProducts } = useProductServices();
  const { findById } = useMedicineServices();

  return (
    <SelectedProduct
      selectedProduct={selectedProduct}
      handleDeleteSelectedProduct={handleDeleteSelectedProduct}
      handleSelectProduct={handleSelectProduct}
      onFetchSuccess={onFetchSuccess}
      getProduct={findById}
      getSimilarProducts={getSimilarProducts}
      productInfo={productInfo}
      handleAdd={handleAdd}
    >
      <Fragment></Fragment>
    </SelectedProduct>
  );
}
