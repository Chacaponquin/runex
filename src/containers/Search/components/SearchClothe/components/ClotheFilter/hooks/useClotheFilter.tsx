"use client";

import { ProductColor, ProductSize } from "@modules/product/domain";
import { useClotheServices } from "@modules/product/services";
import { useEffect, useState } from "react";

export default function useClotheFilter() {
  const { getAllSizes, getAllColors } = useClotheServices();

  const [sizeOptions, setSizeOptions] = useState<ProductSize[]>([]);
  const [colorOptions, setColorOptions] = useState<ProductColor[]>([]);

  useEffect(() => {
    getAllSizes({
      onSuccess(data) {
        setSizeOptions(data);
      },
      onError() {
        setSizeOptions([]);
      },
    });

    getAllColors({
      onSuccess(data) {
        setColorOptions(data);
      },
      onError() {
        setColorOptions([]);
      },
    });
  }, []);

  return { colorOptions, sizeOptions };
}
