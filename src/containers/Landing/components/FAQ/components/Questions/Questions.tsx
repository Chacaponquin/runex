import { FAQ } from "@containers/Landing/interfaces";
import React from "react";
import { Card, Pagination } from "./components";
import { useQuestions } from "./hooks";

interface Props {
  faq: Array<FAQ>;
}

export default function Questions({ faq }: Props) {
  const {
    showQuestions,
    page,
    handleBackPage,
    handleNextPage,
    totalPages,
    disableBack,
    disableNext,
  } = useQuestions({
    faq: faq,
  });

  return (
    <div className="flex flex-col w-full justify-center min-h-full">
      {showQuestions.map((f, index) => (
        <Card key={index} question={f.question} response={f.response} />
      ))}

      <Pagination
        page={page}
        handleNext={handleNextPage}
        handleBack={handleBackPage}
        totalPages={totalPages}
        disableBack={disableBack}
        disableNext={disableNext}
      />
    </div>
  );
}
