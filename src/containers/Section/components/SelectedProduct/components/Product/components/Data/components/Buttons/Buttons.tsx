import { Bag } from "@modules/app/modules/icon/components";
import React from "react";

export default function Buttons() {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <button className="rounded bg-black text-white text-lg px-4 py-2 w-full font-fontMedium">
        Buy now
      </button>

      <button className="w-full bg-blue-500 text-lg text-white rounded px-4 py-2 flex gap-x-4 stroke-white justify-center items-center">
        <Bag size={22} />
        <p className="font-fontMedium">Add to bag</p>
      </button>
    </div>
  );
}
