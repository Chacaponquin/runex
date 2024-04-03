"use client";

import { ContentLoader } from "@modules/shared/components";
import { Fragment } from "react";

interface Props {
  size: number;
}

export default function ProductLoader({ size }: Props) {
  return (
    <Fragment>
      {Array.from({ length: size }).map((_, index) => (
        <div className="flex flex-col gap-y-2" key={index}>
          <ContentLoader height={170} />
          <ContentLoader height={25} />
          <ContentLoader height={25} marginRight={70} />
        </div>
      ))}
    </Fragment>
  );
}
