import { APP_IMAGES } from "@modules/app/constants";
import Image from "next/image";
import React from "react";

export default function Empty() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={APP_IMAGES.EMPTY.src}
        alt={APP_IMAGES.EMPTY.alt}
        className="object-contain w-[300px]"
        width={700}
        height={400}
      />

      <h2 className="sm:mt-5 mt-4 text-2xl sm:text-3xl text-center font-fontMedium">
        No se encontraron resultados
      </h2>
    </div>
  );
}
