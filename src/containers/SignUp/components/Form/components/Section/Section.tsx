import clsx from "clsx";
import React from "react";

interface Props {
  vertical: boolean;
  children: React.ReactNode;
}

export default function Section({ children, vertical }: Props) {
  const CLASS = clsx("gap-4 flex w-full", {
    "flex-col": vertical,
  });

  return <section className={CLASS}>{children}</section>;
}
