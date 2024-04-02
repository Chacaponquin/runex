"use client";

import { useEffect, useState } from "react";
import { ProductSection } from "../interfaces";
import { PostProps } from "@modules/app/modules/http/interfaces";
import { Product } from "@modules/product/domain";
import { GetSpecificProductsDTO } from "@modules/product/dto/product";

interface Props {
  getNewProducts(
    props: PostProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
  getPopularProducts(
    props: PostProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
  getTrendingProducts(
    props: PostProps<Array<Product>, GetSpecificProductsDTO>
  ): void;
}

export default function useProducts(props: Props) {
  const [sections, setSections] = useState<Array<ProductSection>>([
    { products: [], title: "Nuevos productos", id: 1, loading: true },
    { products: [], title: "En tendencia", id: 2, loading: true },
    { products: [], title: "Favoritos", id: 3, loading: true },
  ]);

  useEffect(() => {
    props.getNewProducts({
      body: { page: 1 },
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
      body: { page: 1 },
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
      body: { page: 1 },
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
