"use client";

import { SearchFilterFunctionProps } from "@containers/Search/interfaces";
import { useMedicineServices } from "@modules/product/services";
import { useEffect, useState } from "react";
import { Form } from "../interfaces";
import { MedicineParamsUrl, Provider } from "@modules/product/domain";
import { SearchMedicineParams } from "@modules/product/interfaces/params";
import { Providers } from "@modules/product/value-object";
import { useRouter } from "next/navigation";

interface Props {
  params: SearchMedicineParams;
}

export default function useSearchMedicine({ params }: Props) {
  const router = useRouter();
  const { filter, getAllProviders } = useMedicineServices();

  const [form, setForm] = useState<Form>({
    providers: new Providers().toValue(params.providers),
  });

  const [providerOptions, setProviderOptions] = useState<Provider[]>([]);
  const [providersLoading, setProvidersLoading] = useState(false);

  useEffect(() => {
    setProvidersLoading(true);
    getAllProviders({
      onError() {
        setProviderOptions([]);
      },
      onSuccess(data) {
        setProviderOptions(data);
      },
      onFinally() {
        setProvidersLoading(false);
      },
    });
  }, []);

  function filterFunction(props: SearchFilterFunctionProps) {
    const filters = {
      maxPrice: props.body.maxPrice,
      minPrice: props.body.minPrice,
      name: props.body.name,
      page: props.body.page,
      providers: form.providers,
      order: props.body.order,
    };

    filter({
      ...props,
      body: filters,
    });

    const url = new MedicineParamsUrl().build(filters);

    router.push(url);
  }

  function handleAddProvider(p: string) {
    setForm((prev) => ({ ...prev, providers: [...prev.providers, p] }));
  }

  function handleDeleteProvider(p: string) {
    setForm((prev) => ({
      ...prev,
      providers: prev.providers.filter((prov) => prov !== p),
    }));
  }

  return {
    filterFunction,
    form,
    handleDeleteProvider,
    handleAddProvider,
    providerOptions,
    providersLoading,
  };
}
