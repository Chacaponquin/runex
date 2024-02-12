"use client";

import { APP_IMAGES } from "@modules/app/constants";
import { Advantage } from "../interfaces";

export default function useAboutUs() {
  const advantages: Array<Advantage> = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam cupiditate incidunt.",
      title: "Free Shipping",
      picture: APP_IMAGES.LANDING.ADVENTAGES.FIRST,
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam cupiditate incidunt.",
      picture: APP_IMAGES.LANDING.ADVENTAGES.SECOND,
      title: "Secured Payment",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam cupiditate incidunt.",
      picture: APP_IMAGES.LANDING.ADVENTAGES.THIRD,
      title: "Support 24/7",
    },
  ];

  return { advantages };
}
