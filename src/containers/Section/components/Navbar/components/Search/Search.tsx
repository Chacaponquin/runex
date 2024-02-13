import React from "react";
import { Search as SearchIcon } from "@modules/app/modules/icon/components";
import { Input } from "./components";

export default function Search() {
  return (
    <search className="">
      <div className="flex justify-between w-[600px] items-center gap-x-4 stroke-black py-2 px-4 border-[2px] border-gray-100 rounded">
        <Input />
        <SearchIcon size={22} />
      </div>
    </search>
  );
}
