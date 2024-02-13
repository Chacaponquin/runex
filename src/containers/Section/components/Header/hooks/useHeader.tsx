"use client";

import { HeaderSection } from "../interfaces";

export default function useHeader() {
  const sections: Array<HeaderSection> = [
    { label: "Home", url: "home" },
    { label: "Blog", url: "blog" },
    { label: "Mens", url: "Mens" },
  ];

  return { sections };
}
