import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  alt: boolean;
  className?: string;
}

export default function Section({ children, alt, className }: Props) {
  const CLASS = clsx("flex flex-col w-full items-center", {
    "bg-blue-500": alt,
  });

  return (
    <section className={CLASS}>
      <div className={clsx("max-w-[1100px] flex w-full", className)}>
        {children}
      </div>
    </section>
  );
}
