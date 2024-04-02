"use client";

import { ProductSize } from "@modules/product/domain";
import { useProduct } from "@modules/product/hooks";
import { useClotheServices } from "@modules/product/services";
import { useEffect, useState } from "react";

export default function useClotheFilter() {
  const { getAllSizes } = useClotheServices();
  const { colors: colorOptions } = useProduct();

  const [sizeOptions, setSizeOptions] = useState<ProductSize[]>([]);

  useEffect(() => {
    getAllSizes({
      onSuccess(data) {
        setSizeOptions(data);
      },
    });
  }, []);

  return { colorOptions, sizeOptions };
}
