import React from "react";
import { Link as ILink } from "../../interfaces";
import Link from "next/link";

interface Props {
  links: Array<ILink>;
}

export default function Links({ links }: Props) {
  return (
    <section className="flex items-center gap-x-10 justify-center">
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          <span className="text-lg hover:underline hover:underline-offset-4">
            {link.label}
          </span>
        </Link>
      ))}
    </section>
  );
}
