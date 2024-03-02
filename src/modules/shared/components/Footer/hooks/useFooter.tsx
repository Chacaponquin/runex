"use client";

import {
  Email,
  Facebook,
  Instagram,
  Phone,
} from "@modules/app/modules/icon/components";
import { FooterContact, FooterSection } from "../interfaces";
import { CONTACT } from "@modules/app/constants";

export default function useFooter() {
  const year = new Date().getFullYear();

  const sections: Array<FooterSection> = [
    {
      subSections: [
        { label: "Términos y condiciones", url: "term-conditions" },
        { label: "Privacidad y cookies", url: "privacity" },
        { label: "Penalidades y sobrecargos", url: "sob" },
        { label: "Devoluciones y reembolsos", url: "sob" },
      ],
      title: "Empresa",
    },
    {
      subSections: [
        { label: "FAQ", url: "faq" },
        { label: "Contact us", url: "contact us" },
        { label: "Como comprar?", url: "como" },
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
