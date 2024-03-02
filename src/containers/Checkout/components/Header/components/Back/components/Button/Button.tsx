import { ArrowLeft } from "@modules/app/modules/icon/components";
import { useRouter } from "next/navigation";
import React from "react";

export default function Button() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-x-2 fill-black"
    >
      <i>
        <ArrowLeft size={20} />
      </i>

      <p className="text-base font-fontMedium">Atrás</p>
    </button>
  );
}
