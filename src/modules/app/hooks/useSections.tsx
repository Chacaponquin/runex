"use client";

import { APP_ROUTES } from "../constants";
import { SectionLink } from "../interfaces";

export default function useSections() {
  const sections: Array<SectionLink> = [
    { label: "Ropa", url: APP_ROUTES.SECTION.CLOTHES, sections: [] },
    { label: "Medicamentos", url: APP_ROUTES.SECTION.MEDICINE, sections: [] },
  ];

  return { sections };
}
