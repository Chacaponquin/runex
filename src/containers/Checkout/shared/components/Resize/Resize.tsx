import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
}

export default function Resize({ children, className }: Props) {
  return (
    <div className="flex w-full flex-col items-center px-5">
      <div className={clsx("max-w-[700px] w-full", className)}>{children}</div>
    </div>
  );
}
