"use client";

import { Button, LimitPage, Page } from "./components";
import { ArrowLeft, ArrowRight } from "@modules/app/modules/icon/components";
import { useScroll } from "./hooks";

interface Props {
  handleNext(): void;
  handleBack(): void;
  currentPage: number;
  totalPages: number;
  handleChangePage(p: number): void;
}

export default function Scroll({
  handleBack,
  handleNext,
  currentPage,
  totalPages,
  handleChangePage,
}: Props) {
  const { pages, showFirstPage, showLastPage } = useScroll({
    currentPage: currentPage,
    totalPages: totalPages,
  });

  return (
    <section className="flex w-full justify-center items-center gap-x-8 mt-10">
      <Button
        icon={ArrowLeft}
        handleClick={handleBack}
        disabled={currentPage <= 1}
      />

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 justify-center">
        {showFirstPage && (
          <LimitPage
            handleClick={() => handleChangePage(1)}
            page={1}
            reverse={false}
            selected={currentPage === 1}
          />
        )}

        {pages.map((p) => (
          <Page
            key={p}
            page={p}
            selected={currentPage === p}
            handleClick={() => handleChangePage(p)}
          />
        ))}

        {showLastPage && (
          <LimitPage
            handleClick={() => handleChangePage(totalPages)}
            reverse={true}
            page={totalPages}
            selected={currentPage === totalPages}
          />
        )}
      </div>

      <Button
        icon={ArrowRight}
        handleClick={handleNext}
        disabled={currentPage >= totalPages}
      />
    </section>
  );
}
