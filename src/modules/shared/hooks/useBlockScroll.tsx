"use client";

import { useEffect } from "react";

export default function useBlockScroll(condition: boolean) {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [condition]);
}
