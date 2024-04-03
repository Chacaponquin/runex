"use client";

import { ContentLoader } from "@modules/shared/components";

export default function ProductLoader() {
  return (
    <div className="flex flex-col gap-y-2">
      <ContentLoader height={170} />
      <ContentLoader height={25} />
      <ContentLoader height={25} marginRight={70} />
    </div>
  );
}
