"use client";

import { RefObject, useEffect } from "react";

interface Props {
  onClickOutside(): void;
  ref: RefObject<HTMLDivElement>;
}

export default function useClickOutside({ onClickOutside, ref }: Props) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return {};
}
