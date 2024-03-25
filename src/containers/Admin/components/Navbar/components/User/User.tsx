import { APP_IMAGES } from "@modules/app/constants";
import Image from "next/image";
import React from "react";

export default function User() {
  return (
    <div className="flex gap-x-4 items-center">
      <Image
        src={APP_IMAGES.USER.src}
        alt={APP_IMAGES.USER.alt}
        width={45}
        height={45}
        className="object-cover rounded-full"
      />

      <h2 className="font-fontMedium text-base">Admin</h2>
    </div>
  );
}
