"use client";

import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";
import { Fragment } from "react";

interface Props {
  open: boolean;
  handleClose(): void;
  children: React.ReactNode;
  className?: string;
  align: "center" | "left" | "right";
}

export default function Modal({
  handleClose,
  children,
  open,
  className,
  align,
}: Props) {
  useBlockScroll(open);

  const CONTAINER_CLASS = clsx(
    "w-full h-svh max-h-svh",
    "flex items-center",
    "fixed top-0 left-0",
    "py-4 px-5 esm:px-2",
    "bg-black/50",
    "z-30",

    {
      "justify-start": align == "left",
      "justify-end": align === "right",
      "justify-center": align === "center",
    },

    className
  );

  return (
    <Fragment>
      {open && (
        <div className={CONTAINER_CLASS} onClick={handleClose}>
          {children}
        </div>
      )}
    </Fragment>
  );
}
