"use client";

import { Button, Page } from "./components";
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
  const { pages } = useScroll({ totalPages: totalPages });

  return (
    <section className="flex w-full justify-center items-center gap-x-8 mt-10">
      <Button
        icon={ArrowLeft}
        handleClick={handleBack}
        disabled={currentPage <= 1}
      />

      <div className="flex items-center gap-x-3 justify-center">
        {pages.map((p) => (
          <Page
            key={p}
            page={p}
            selected={currentPage === p}
            handleClick={() => handleChangePage(p)}
          />
        ))}
      </div>

      <Button
        icon={ArrowRight}
        handleClick={handleNext}
        disabled={currentPage >= totalPages}
      />
    </section>
  );
}
