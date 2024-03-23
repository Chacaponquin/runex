"use client";

import { Medicine } from "@modules/product/domain";
import { useState } from "react";

export default function useSelectedMedicine() {
  const [productInfo, setProductInfo] = useState<Medicine | null>(null);

  function onFetchSuccess(data: Medicine) {
    setProductInfo(data);
  }

  return {
    onFetchSuccess,
    productInfo,
  };
}
