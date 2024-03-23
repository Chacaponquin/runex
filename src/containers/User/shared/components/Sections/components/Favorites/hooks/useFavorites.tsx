import { Product } from "@modules/product/domain";
import { useEffect, useState } from "react";

export default function useFavorites() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    setLoading(true);
    setProducts([]);
  });

  return { loading, products };
}
