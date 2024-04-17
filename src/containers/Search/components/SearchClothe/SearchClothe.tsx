"use client";

import { Search } from "@containers/Search/shared/components";
import { ClotheFilter } from "./components";
import { useSearchClothe } from "./hooks";
import { SearchProvider } from "@containers/Search/contexts";
import { SearchClotheParams } from "@modules/product/interfaces/params";

interface Props {
  params: SearchClotheParams;
}

export default function SearchClothe({ params }: Props) {
  const {
    filterFunction,
    form,
    handleAddColor,
    handleAddSize,
    handleDeleteColor,
    handleDeleteSize,
    handleAddProvider,
    handleDeleteProvider,
  } = useSearchClothe({
    params: params,
  });

  return (
    <SearchProvider filterFunction={filterFunction} params={params}>
      <Search product="Clothe">
        <ClotheFilter
          form={form}
          handleAddColor={handleAddColor}
          handleAddSize={handleAddSize}
          handleDeleteColor={handleDeleteColor}
          handleDeleteSize={handleDeleteSize}
          handleAddProvider={handleAddProvider}
          handleDeleteProvider={handleDeleteProvider}
        />
      </Search>
    </SearchProvider>
  );
}
