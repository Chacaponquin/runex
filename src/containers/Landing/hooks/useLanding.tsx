"use client";

import { FAQ } from "../interfaces";
import { useEffect, createRef, useState } from "react";
import { faker } from "@faker-js/faker";

export default function useLanding() {
  const presentationRef = createRef<HTMLHeadElement>();

  const [presentationVisible, setPresentationVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPresentationVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (presentationRef.current) {
      observer.observe(presentationRef.current);
    }

    return () => {
      if (presentationRef.current) {
        observer.unobserve(presentationRef.current);
      }
    };
  }, [presentationRef]);

  return { faq, presentationRef, presentationVisible };
}
