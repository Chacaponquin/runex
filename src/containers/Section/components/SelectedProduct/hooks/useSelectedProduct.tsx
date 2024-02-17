"use client";

import { Product } from "@modules/product/domain";
import { useProductServices } from "@modules/product/services";
import { useEffect, useState } from "react";

interface Props {
  productId: string | null;
}

export default function useSelectedProduct({ productId }: Props) {
  const { getProductById, getSimilarProducts } = useProductServices();

  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Array<Product>>([]);

  const [similarProductsLoading, setSimilarProductsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (productId) {
      setLoading(true);

      getProductById(productId).then((info) => {
        setProductInfo(info);

        setLoading(false);
      });
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      setSimilarProductsLoading(true);

      getSimilarProducts(productId).then((data) => {
        setSimilarProducts(data);
        setSimilarProductsLoading(false);
      });
    }
  }, [productId]);

  return { productInfo, loading, similarProductsLoading, similarProducts };
}
