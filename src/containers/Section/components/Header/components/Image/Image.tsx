import { APP_IMAGES } from "@modules/app/constants";
import React from "react";

export default function Image() {
  return (
    <div className="w-full mb-8">
      <div
        className="flex w-full h-[370px]"
        style={{
          backgroundImage: `url("${APP_IMAGES.LANDING.CLOTHES.src}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
