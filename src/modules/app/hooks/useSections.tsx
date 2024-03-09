"use client";

import { APP_ROUTES } from "../constants";
import { SectionLink } from "../interfaces";

export default function useSections() {
  const sections: Array<SectionLink> = [
    {
      label: "Ropa",
      url: APP_ROUTES.SECTION.CLOTHES,
      sections: [
        { label: "Shorts", url: "" },
        { label: "Zapatos", url: "" },
        { label: "Camisetas", url: "" },
        { label: "Joyería", url: "" },
      ],
    },

    {
      label: "Medicamentos",
      url: APP_ROUTES.SECTION.MEDICINE,
      sections: [
        { label: "Antibióticos", url: "" },
        { label: "Analgésicos", url: "" },
        { label: "Antialérgicos", url: "" },
      ],
    },
  ];

  return { sections };
}
