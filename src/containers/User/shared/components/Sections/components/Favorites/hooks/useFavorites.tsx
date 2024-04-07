"use client";

import { Product } from "@modules/product/domain";
import { useUserServices } from "@modules/user/services";
import { useEffect, useState } from "react";

export default function useFavorites() {
  const { favoriteProducts } = useUserServices();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);

    favoriteProducts({
      onFinally() {
        setLoading(false);
      },
      onSuccess(data) {
        setProducts(data);
      },
    });
  }, []);

  return { loading, products };
}
