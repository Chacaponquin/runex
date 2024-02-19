"use client";

import { SCREEN_SIZES } from "@modules/app/constants";
import { useScreen } from "@modules/shared/hooks";
import { useMemo } from "react";

interface Props {
  totalPages: number;
}

export default function useScroll({ totalPages }: Props) {
  const { bigScreen } = useScreen(SCREEN_SIZES.MD);

  const pages: Array<number> = useMemo(() => {
    const result: Array<number> = [];

    let i = 1;
    while (i <= totalPages) {
      result.push(i);
      i = i + (!bigScreen ? 3 : 1);
    }

    return result;
  }, [totalPages, bigScreen]);

  return { pages };
}
