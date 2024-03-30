"use client";

import { SelectedProduct } from "@modules/shared/components";
import { useSelectedMedicine } from "./hooks";
import { Fragment } from "react";
import {
  useMedicineServices,
  useProductServices,
} from "@modules/product/services";

export default function SelectedMedicine() {
  const { onFetchSuccess, productInfo, handleAdd } = useSelectedMedicine();
  const { getSimilarProducts } = useProductServices();
  const { findById } = useMedicineServices();

  return (
    <SelectedProduct
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
