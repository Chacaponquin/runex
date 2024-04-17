import { ContentLoader } from "@modules/shared/components";
import { Fragment } from "react";

export default function Loading() {
  return (
    <Fragment>
      {Array.from({ length: 6 }).map((_, index) => (
        <ContentLoader height={20} key={index} />
      ))}
    </Fragment>
  );
}
