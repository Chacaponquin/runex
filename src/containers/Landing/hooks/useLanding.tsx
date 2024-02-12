"use client";

import { FAQ } from "../interfaces";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export default function useLanding() {
  const [faq, setFaq] = useState<Array<FAQ>>([]);

  useEffect(() => {
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

  return { faq };
}
