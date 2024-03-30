import { APP_ROUTES } from "@modules/app/constants";
import { ArrowLeft } from "@modules/app/modules/icon/components";
import Link from "next/link";
import React, { useState } from "react";

export default function Button() {
  const [hover, setHover] = useState(false);

  return (
    <Link href={APP_ROUTES.ROOT}>
      <button
        className="flex items-center gap-x-3 px-7 py-3 bg-black rounded-sm"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <i
          className="fill-white transition-all duration-200"
          style={{
            transform: hover ? `translateX(-5px)` : `translateX(0)`,
          }}
        >
          <ArrowLeft size={22} />
        </i>

        <span className="text-xl text-white font-fontMedium">Regresar</span>
      </button>
    </Link>
  );
}
