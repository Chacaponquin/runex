"use client";

import { useMemo } from "react";

interface Props {
  totalPages: number;
  currentPage: number;
}

export default function useScroll({ totalPages, currentPage }: Props) {
  const pages: number[] = useMemo(() => {
    const show = [] as number[];

    if (currentPage === 1) {
      let i = 1;
      while (i <= totalPages && i <= 3) {
        show.push(i);
        i++;
      }
    } else if (currentPage === totalPages) {
      let i = currentPage - 2;
      while (i <= currentPage && i >= 1) {
        show.push(i);
        i++;
      }
    } else {
      show.push(currentPage - 1);
      show.push(currentPage);
      show.push(currentPage + 1);
    }

    return show;
  }, [totalPages, currentPage]);

  const showFirstPage = !pages.includes(1);

  const showLastPage = !pages.includes(totalPages);

  return { pages, showFirstPage, showLastPage };
}
