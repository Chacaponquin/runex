"use client";

import { ProductSize } from "@modules/product/domain";
import { useProduct } from "@modules/product/hooks";
import { useProductServices } from "@modules/product/services";
import { useEffect, useState } from "react";

export default function useClotheFilter() {
  const { getAllProductsSizes } = useProductServices();
  const { colors: colorOptions } = useProduct();

  const [sizeOptions, setSizeOptions] = useState<ProductSize[]>([]);

  useEffect(() => {
    getAllProductsSizes({
      onSuccess(data) {
        setSizeOptions(data);
      },
    });
  }, []);

  return { colorOptions, sizeOptions };
}
