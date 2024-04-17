"use client";

import { SearchProvider } from "@containers/Search/contexts";
import { Filters, Search, Section } from "@containers/Search/shared/components";
import { useSearchMedicine } from "./hooks";
import { MultiSelect } from "@containers/Search/shared/components/Filters/shared/components";
import { SearchMedicineParams } from "@modules/product/interfaces/params";

interface Props {
  params: SearchMedicineParams;
}

export default function SearchMedicine({ params }: Props) {
  const {
    filterFunction,
    form,
    handleAddProvider,
    handleDeleteProvider,
    providerOptions,
    providersLoading,
  } = useSearchMedicine({ params });

  return (
    <SearchProvider params={params} filterFunction={filterFunction}>
      <Search product="Medicine">
        <Filters>
          <Section title="Tienda">
            <MultiSelect
              options={providerOptions.map((p) => p.name)}
              handleDelete={handleDeleteProvider}
              handleSelect={handleAddProvider}
              selected={form.providers}
              loading={providersLoading}
            />
          </Section>
        </Filters>
      </Search>
    </SearchProvider>
  );
}
