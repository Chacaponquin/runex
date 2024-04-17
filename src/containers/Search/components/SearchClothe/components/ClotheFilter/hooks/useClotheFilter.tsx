"use client";

import { ProductColor, ProductSize, Provider } from "@modules/product/domain";
import { useClotheServices } from "@modules/product/services";
import { useEffect, useState } from "react";

export default function useClotheFilter() {
  const { getAllSizes, getAllColors, getAllProviders } = useClotheServices();

  const [sizeOptions, setSizeOptions] = useState<ProductSize[]>([]);
  const [colorOptions, setColorOptions] = useState<ProductColor[]>([]);
  const [providerOptions, setProviderOptions] = useState<Provider[]>([]);

  const [sizesLoading, setSizesLoading] = useState(false);
  const [colorsLoading, setColorsLoading] = useState(false);
  const [providersLoading, setProvidersLoading] = useState(false);

  useEffect(() => {
    setSizesLoading(true);
    getAllSizes({
      onSuccess(data) {
        setSizeOptions(data);
      },
      onError() {
        setSizeOptions([]);
      },
      onFinally() {
        setSizesLoading(false);
      },
    });

    setColorsLoading(true);
    getAllColors({
      onSuccess(data) {
        setColorOptions(data);
      },
      onError() {
        setColorOptions([]);
      },
      onFinally() {
        setColorsLoading(false);
      },
    });

    setProvidersLoading(true);
    getAllProviders({
      onSuccess(data) {
        setProviderOptions(data);
      },
      onError() {
        setProviderOptions([]);
      },
      onFinally() {
        setProvidersLoading(false);
      },
    });
  }, []);

  return {
    colorOptions,
    sizeOptions,
    providerOptions,
    sizesLoading,
    colorsLoading,
    providersLoading,
  };
}
