"use client";

import { useEffect, useState } from "react";
import { ProductSection } from "../interfaces";
import { FetchProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";

interface Props {
  getNewProducts(props: FetchProps<Array<Product>>): void;
  getPopularProducts(props: FetchProps<Array<Product>>): void;
  getTrendingProducts(props: FetchProps<Array<Product>>): void;
}

export default function useProducts(props: Props) {
  const [sections, setSections] = useState<Array<ProductSection>>([
    { products: [], title: "Nuevos productos", id: 1, loading: true },
    { products: [], title: "En tendencia", id: 2, loading: true },
    { products: [], title: "Favoritos", id: 3, loading: true },
  ]);

  useEffect(() => {
    props.getNewProducts({
      onSuccess(products) {
        setSections((prev) =>
          prev.map((s) => {
            if (s.id === 1) {
              s.products = products;
            }

            return s;
          })
        );
      },
    });
  }, []);

  useEffect(() => {
    props.getTrendingProducts({
      onSuccess(products) {
        setSections((prev) =>
          prev.map((s) => {
            if (s.id === 2) {
              s.products = products;
            }

            return s;
          })
        );
      },
    });
  }, []);

  useEffect(() => {
    props.getPopularProducts({
      onSuccess(products) {
        setSections((prev) =>
          prev.map((s) => {
            if (s.id === 3) {
              s.products = products;
            }

            return s;
          })
        );
      },
    });
  }, []);

  return { sections };
}
