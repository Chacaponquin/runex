import { APP_IMAGES } from "@modules/app/constants";
import Image from "next/image";
import React from "react";

export default function Empty() {
  return (
    <div className="flex flex-col items-center py-6">
      <Image
        src={APP_IMAGES.EMPTY.src}
        alt={APP_IMAGES.EMPTY.alt}
        width={300}
        height={500}
        className="w-[240px] object-contain"
      />

      <h2 className="font-fontMedium text-2xl mt-4">No hay datos</h2>
    </div>
  );
}
