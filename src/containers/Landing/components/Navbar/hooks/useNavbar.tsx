"use client";

import { APP_ROUTES } from "@modules/app/constants";
import { Link } from "../interfaces";

export default function useNavbar() {
  const links: Array<Link> = [
    { label: "Clouse", url: APP_ROUTES.SECTION.CLOTHES },
    { label: "Medicamentos", url: APP_ROUTES.SECTION.MEDICINE },
  ];

  return { links };
}
