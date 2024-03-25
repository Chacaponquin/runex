"use client";

import { useModal } from "@containers/Admin/hooks";
import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";
import { Loading } from "./components";

interface Props {
  children: React.ReactNode;
  className: string;
  handleSubmit(): void;
  loading: boolean;
}

export default function Modal({
  children,
  className,
  loading,
  handleSubmit,
}: Props) {
  useBlockScroll(true);

  const { handleClose } = useModal();

  const CLASS = clsx(
    "fixed top-0 left-0",
    "flex items-center justify-center",
    "h-svh w-full",
    "bg-black/50",
    "px-3 py-4",
    "z-50"
  );

  const FORM_CLASS = clsx(
    "w-full max-h-full",
    "bg-white",
    "px-8 esm:px-5 py-5",
    "rounded",
    "overflow-auto",
    className
  );

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <div className={CLASS} onClick={handleClose}>
      {loading ? (
        <Loading />
      ) : (
        <form
          onClick={(e) => e.stopPropagation()}
          className={FORM_CLASS}
          style={{
            maxWidth: `1100px`,
          }}
          onSubmit={handleFormSubmit}
        >
          {children}
        </form>
      )}
    </div>
  );
}
