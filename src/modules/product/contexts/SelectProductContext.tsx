"use client";

import { createContext, Fragment, useState } from "react";
import { ISelectProduct } from "../interfaces";
import { PRODUCT_TYPES } from "../constants";
import { SelectedClothe, SelectedMedicine } from "../components";

interface Props {
  selectedProduct: ISelectProduct | null;
  handleDeleteSelectedProduct(): void;
  handleSelectProduct(id: ISelectProduct): void;
}

export const SelectProductContext = createContext<Props>({
  selectedProduct: null,
} as Props);

export function SelectProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedProduct, setSelectedProduct] = useState<ISelectProduct | null>(
    null
  );

  function handleSelectProduct(product: ISelectProduct) {
    setSelectedProduct(product);
  }

  function handleDeleteSelectedProduct() {
    setSelectedProduct(null);
  }

  const value = {
    selectedProduct,
    handleDeleteSelectedProduct,
    handleSelectProduct,
  };

  return (
    <SelectProductContext.Provider value={value}>
      {selectedProduct && (
        <Fragment>
          {selectedProduct.type === PRODUCT_TYPES.CLOTHE && <SelectedClothe />}
          {selectedProduct.type === PRODUCT_TYPES.MEDICINE && (
            <SelectedMedicine />
          )}
        </Fragment>
      )}
      {children}
    </SelectProductContext.Provider>
  );
}
