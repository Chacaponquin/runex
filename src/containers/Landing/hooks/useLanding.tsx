"use client";

import { useEffect, createRef, useState } from "react";

export default function useLanding() {
  const presentationRef = createRef<HTMLHeadElement>();

  const [presentationVisible, setPresentationVisible] = useState(false);

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

  return { presentationRef, presentationVisible };
}
