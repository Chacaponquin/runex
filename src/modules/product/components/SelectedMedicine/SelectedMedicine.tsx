"use client";

import { SelectedProduct } from "@modules/shared/components";
import { useSelectedMedicine } from "./hooks";
import { Fragment } from "react";
import { useMedicineServices } from "@modules/product/services";

export default function SelectedMedicine() {
  const { onFetchSuccess, productInfo, handleAdd } = useSelectedMedicine();
  const { findById, getSimilars } = useMedicineServices();

  return (
    <SelectedProduct
      onFetchSuccess={onFetchSuccess}
      getProduct={findById}
      getSimilarProducts={getSimilars}
      productInfo={productInfo}
      handleAdd={handleAdd}
    >
      <Fragment></Fragment>
    </SelectedProduct>
  );
}
