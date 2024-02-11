import React from "react";
import { Button } from "./components";
import { ArrowLeft, ArrowRight } from "@modules/app/modules/icon/components";

interface Props {
  page: number;
  handleNext(): void;
  handleBack(): void;
  totalPages: number;
  disableBack: boolean;
  disableNext: boolean;
}

export default function Pagination({
  page,
  handleBack,
  handleNext,
  totalPages,
  disableBack,
  disableNext,
}: Props) {
  const PAGE_TEXT = `${page}/${totalPages}`;

  return (
    <section className="flex justify-end mt-5 gap-x-6 items-center">
      <Button
        icon={ArrowLeft}
        disabled={disableBack}
        handleClick={handleBack}
      />

      <p className="text-base text-gray-700">{PAGE_TEXT}</p>

      <Button
        icon={ArrowRight}
        disabled={disableNext}
        handleClick={handleNext}
      />
    </section>
  );
}
