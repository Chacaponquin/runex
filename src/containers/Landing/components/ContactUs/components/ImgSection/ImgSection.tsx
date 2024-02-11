import React from "react";
import Image from "next/image";
import { APP_IMAGES } from "@modules/app/constants";

export default function ImgSection() {
  return (
    <div className="min-w-[450px]">
      <Image
        src={APP_IMAGES.CONTACT_US.src}
        alt={APP_IMAGES.CONTACT_US.alt}
        width={450}
        height={700}
        className="w-full object-cover"
      />
    </div>
  );
}
