import { APP_IMAGES } from "@modules/app/constants";
import Image from "next/image";
import React from "react";

export default function Img() {
  return (
    <div className="min-w-[370px] xl:block hidden">
      <Image
        src={APP_IMAGES.LANDING.FAQ.src}
        alt={APP_IMAGES.LANDING.FAQ.alt}
        width={300}
        height={400}
        className="object-contain w-full"
      />
    </div>
  );
}
