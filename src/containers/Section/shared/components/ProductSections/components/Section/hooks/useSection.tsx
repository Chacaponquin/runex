"use client";

import { useEffect, useState } from "react";
import { ProductSection } from "../../../interfaces";
import { BodyProps } from "@modules/app/modules/http/interfaces";
import { GetSpecificProductsDTO } from "@modules/product/dto/product";
import { Product } from "@modules/product/domain";

interface Props {
  getProducts(props: BodyProps<Array<Product>, GetSpecificProductsDTO>): void;
}

export default function useSection({ getProducts }: Props): ProductSection {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const size = 4;

  useEffect(() => {
    setLoading(true);

    getProducts({
      body: { page: page },
      onSuccess(products) {
        setProducts((prev) => [...prev, ...products]);
      },
      onFinally() {
        setLoading(false);
      },
    });
  }, [page]);

  function handleNextPage() {
    setPage((prev) => prev + 1);
  }

  function handlePrevPage() {
    setPage((prev) => prev - 1);
  }

  return { loading, products, page, handleNextPage, handlePrevPage, size };
}
