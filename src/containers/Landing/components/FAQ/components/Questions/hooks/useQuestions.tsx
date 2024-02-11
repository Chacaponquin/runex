"use client";

import { FAQ } from "@containers/Landing/interfaces";
import { useMemo, useState } from "react";

interface Props {
  faq: Array<FAQ>;
}

interface Pagination {
  page: number;
}

export default function useQuestions({ faq }: Props) {
  const [pagination, setPagination] = useState<Pagination>({ page: 1 });

  const showQuestions = useMemo(() => {
    return faq.slice((pagination.page - 1) * 5, pagination.page * 5);
  }, [pagination, faq]);

  const totalPages = faq.length / 5;
  const disableNext = pagination.page === totalPages;
  const disableBack = pagination.page <= 1;

  function handleNextPage() {
    setPagination((prev) => ({ page: prev.page + 1 }));
  }

  function handleBackPage() {
    setPagination((prev) => ({ page: prev.page - 1 }));
  }

  return {
    showQuestions,
    handleBackPage,
    handleNextPage,
    page: pagination.page,
    totalPages,
    disableBack,
    disableNext,
  };
}
