"use client";

import { APP_ROUTES } from "@modules/app/constants";
import { SectionLink } from "../interfaces";
import { USER_SECTIONS } from "@containers/User/constants";

export default function useSections() {
  const sections: Array<SectionLink> = [
    {
      label: "Orders",
      url: APP_ROUTES.USER.ORDERS,
      section: USER_SECTIONS.ORDERS,
    },
    {
      label: "Favorites",
      url: APP_ROUTES.USER.FAVORITES,
      section: USER_SECTIONS.FAVORITES,
    },
  ];

  return { sections };
}
