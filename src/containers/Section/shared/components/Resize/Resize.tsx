import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}

export default function Resize({ children, className, containerClass }: Props) {
  return (
    <section
      className={clsx("w-full flex justify-center px-5", containerClass)}
    >
      <div className={clsx("max-w-[1200px]", className)}>{children}</div>
    </section>
  );
}
