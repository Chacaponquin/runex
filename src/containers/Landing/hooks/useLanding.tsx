"use client";

import { Product } from "@/modules/product/domain";
import { useProductServices } from "@modules/product/services";
import { FAQ } from "../interfaces";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export default function useLanding() {
  const { getPopularProducts } = useProductServices();

  const [popularProducts, setPopularProducts] = useState<Array<Product>>([]);
  const [faq, setFaq] = useState<Array<FAQ>>([]);

  useEffect(() => {
    getPopularProducts().then((data) => {
      setPopularProducts(data);
    });

    setFaq(
      Array.from({ length: 10 }).map(() => {
        return {
          id: faker.string.uuid(),
          question: faker.lorem.sentence(),
          response: faker.lorem.paragraph(),
        };
      })
    );
  }, []);

  return { popularProducts, faq };
}
