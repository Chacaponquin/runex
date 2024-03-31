"use client";

import { SearchProvider } from "@containers/Search/contexts";
import { Search } from "@containers/Search/shared/components";
import { Fragment } from "react";
import { SearchMedicineParams } from "./interfaces";
import { useSearchMedicine } from "./hooks";

interface Props {
  params: SearchMedicineParams;
}

export default function SearchMedicine({ params }: Props) {
  const { filterFunction } = useSearchMedicine();

  return (
    <SearchProvider params={params} filterFunction={filterFunction}>
      <Search filter={<Fragment></Fragment>} />
    </SearchProvider>
  );
}
