import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Resize({ children, className }: Props) {
  return (
    <section className="w-full flex justify-center px-5">
      <div className={clsx("max-w-[1000px]", className)}>{children}</div>
    </section>
  );
}
