"use client";

import {
  Email,
  Facebook,
  Instagram,
  Phone,
} from "@modules/app/modules/icon/components";
import { FooterContact, FooterSection } from "../interfaces";
import { APP_ROUTES, CONTACT } from "@modules/app/constants";

export default function useFooter() {
  const year = new Date().getFullYear();

  const sections: Array<FooterSection> = [
    {
      subSections: [
        {
          label: "Términos y condiciones",
          url: APP_ROUTES.INFO.CONDITION_TERMS,
        },
        { label: "Privacidad y cookies", url: APP_ROUTES.INFO.PRIVACITY },
        { label: "Penalidades y sobrecargos", url: APP_ROUTES.INFO.PENALTIES },
        { label: "Devoluciones y reembolsos", url: APP_ROUTES.INFO.RETURNS },
      ],
      title: "Empresa",
    },
    {
      subSections: [
        { label: "FAQ", url: "faq" },
        { label: "Contact us", url: "contact us" },
        { label: "Como comprar?", url: APP_ROUTES.INFO.HOW_TO_BUY },
      ],
      title: "Ayuda",
    },
  ];

  const contacts: Array<FooterContact> = [
    { icon: Facebook, content: CONTACT.FACEBOOK },
    { icon: Instagram, content: CONTACT.INSTAGRAM },
    { content: CONTACT.EMAIL, icon: Email },
    { icon: Phone, content: CONTACT.PHONE },
  ];

  return { sections, year, contacts };
}
