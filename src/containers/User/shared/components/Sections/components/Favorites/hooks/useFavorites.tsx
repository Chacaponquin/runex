import { Product } from "@modules/product/domain";
import { useState } from "react";

export default function useFavorites() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Array<Product>>([]);

  return { loading, products };
}
