"use client";

import { useEffect, useState } from "react";
import { ProductSection } from "../interfaces";
import { useProductServices } from "@modules/product/services";

export default function useProducts() {
  const { getNewProducts, getPopularProducts, getTrendingProducts } =
    useProductServices();

  const [sections, setSections] = useState<Array<ProductSection>>([
    { products: [], title: "Nuevos productos", id: 1 },
    { products: [], title: "En tendencia", id: 2 },
    { products: [], title: "Favorites", id: 3 },
  ]);

  useEffect(() => {
    getNewProducts().then((products) => {
      setSections((prev) =>
        prev.map((s) => {
          if (s.id === 1) {
            s.products = products;
          }

          return s;
        })
      );
    });
  }, []);

  useEffect(() => {
    getTrendingProducts().then((products) => {
      setSections((prev) =>
        prev.map((s) => {
          if (s.id === 2) {
            s.products = products;
          }

          return s;
        })
      );
    });
  }, []);

  useEffect(() => {
    getPopularProducts().then((products) => {
      setSections((prev) =>
        prev.map((s) => {
          if (s.id === 3) {
            s.products = products;
          }

          return s;
        })
      );
    });
  }, []);

  return { sections };
}
