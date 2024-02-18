"use client";

import { APP_IMAGES, APP_ROUTES } from "@modules/app/constants";
import { Section } from "../interfaces";

export default function useSections() {
  const sections: Array<Section> = [
    {
      title: "Ropa",
      image: APP_IMAGES.LANDING.CLOTHES,
      url: APP_ROUTES.SECTION.CLOTHES,
    },
    {
      title: "Medicamentos",
      image: APP_IMAGES.LANDING.MEDICINE,
      url: APP_ROUTES.SECTION.MEDICINE,
    },
  ];

  return { sections };
}
