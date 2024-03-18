import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  url: string;
}

export default function Section({ label, url }: Props) {
  return (
    <Link href={url}>
      <span className="font-fontSemiBold text-lg text-gray-700">{label}</span>
    </Link>
  );
}
