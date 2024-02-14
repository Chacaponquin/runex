import React from "react";

interface Props {
  selectedProduct: string | null;
}

export default function SelectedProduct({ selectedProduct }: Props) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-50"
      style={{ visibility: selectedProduct ? "visible" : "hidden" }}
    ></div>
  );
}
