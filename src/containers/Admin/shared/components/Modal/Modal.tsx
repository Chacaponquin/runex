"use client";

import { useModal } from "@containers/Admin/hooks";
import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className: string;
  max: number;
  handleSubmit(): void;
}

export default function Modal({
  children,
  className,
  max,
  handleSubmit,
}: Props) {
  useBlockScroll(true);

  const { handleClose } = useModal();

  const CLASS = clsx(
    "fixed top-0 left-0",
    "flex items-center justify-center",
    "h-screen w-full",
    "bg-black/50"
  );

  const FORM_CLASS = clsx(
    "w-full",
    "bg-white",
    "px-8 py-5",
    "rounded",
    className
  );

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSubmit();
    handleClose();
  }

  return (
    <div className={CLASS} onClick={handleClose}>
      <form
        onClick={(e) => e.stopPropagation()}
        className={FORM_CLASS}
        style={{
          maxWidth: `${max}px`,
        }}
        onSubmit={handleFormSubmit}
      >
        {children}
      </form>
    </div>
  );
}
