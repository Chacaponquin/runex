import { ContentLoader } from "@modules/shared/components";
import React, { Fragment } from "react";

export default function Loading() {
  return (
    <Fragment>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-gray-50 w-full rounded-sm px-7 py-6">
          <ContentLoader className="mb-2" height={35} width={250} />
          <ContentLoader className="mb-4" height={35} width={170} />

          <div className="flex gap-x-2.5 mb-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <ContentLoader key={i} height={50} width={70} />
            ))}
          </div>

          <div className="flex justify-end gap-x-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <ContentLoader key={i} height={30} width={100} />
            ))}
          </div>
        </div>
      ))}
    </Fragment>
  );
}
