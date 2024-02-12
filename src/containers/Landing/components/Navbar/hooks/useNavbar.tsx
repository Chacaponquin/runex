"use client";

import { Link } from "../interfaces";

export default function useNavbar() {
  const links: Array<Link> = [
    { label: "Clouse", url: "clouse" },
    { label: "Medicamentos", url: "medicins" },
  ];

  return { links };
}
