"use client";

import { Search } from "@containers/Search/shared/components";
import { ClotheFilter } from "./components";
import { SearchClotheParams } from "./interfaces";
import { useSearchClothe } from "./hooks";
import { SearchProvider } from "@containers/Search/contexts";

interface Props {
  params: SearchClotheParams;
}

export default function SearchClothe({ params }: Props) {
  const { filterFunction, form } = useSearchClothe({
    params: params,
  });

  return (
    <SearchProvider filterFunction={filterFunction} params={params}>
      <Search filter={<ClotheFilter form={form} />} product="Clothe" />
    </SearchProvider>
  );
}
