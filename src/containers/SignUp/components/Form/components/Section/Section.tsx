import clsx from "clsx";
import React from "react";

interface Props {
  vertical: boolean;
  children: React.ReactNode;
}

export default function Section({ children, vertical }: Props) {
  const CLASS = clsx("flex", "w-full", "gap-4", "esm:flex-col", {
    "flex-col": vertical,
  });

  return <section className={CLASS}>{children}</section>;
}
