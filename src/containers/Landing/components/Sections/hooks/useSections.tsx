"use client";

import { APP_IMAGES, APP_ROUTES } from "@modules/app/constants";
import { Section } from "../interfaces";

export default function useSections() {
  const sections: Array<Section> = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt officiis laborum quidem!",
      title: "Ropa",
      image: APP_IMAGES.LANDING.CLOTHES,
      url: APP_ROUTES.SECTION.CLOTHES,
    },
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt officiis laborum quidem!",
      title: "Medicamentos",
      image: APP_IMAGES.LANDING.MEDICINE,
      url: APP_ROUTES.SECTION.MEDICINE,
    },
  ];

  return { sections };
}
