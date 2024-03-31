import { Loader } from "@modules/app/components";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center w-full mb-20 mt-10">
      <Loader size={70} />
    </div>
  );
}
