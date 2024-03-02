import React from "react";
import { FooterSubSection } from "../../../../interfaces";
import Link from "next/link";

interface Props {
  title: string;
  subSections: Array<FooterSubSection>;
}

export default function Section({ title, subSections }: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="uppercase font-fontSemiBold text-xl mb-2">{title}</h1>

      <div className="flex flex-col gap-y-1">
        {subSections.map((sub, index) => (
          <Link
            key={index}
            href={sub.url}
            className="text-lg hover:underline hover:underline-offset-4"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
