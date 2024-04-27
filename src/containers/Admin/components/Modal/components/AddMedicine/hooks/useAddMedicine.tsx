"use client";

import { useMedicineServices } from "@modules/product/services";
import { useMedicineForm } from "../../../shared/hooks";
import { useToast } from "@modules/app/modules/toast/hooks";

export default function useAddMedicine() {
  const { error, success } = useToast();
  const { form, handleSubmit, handleChangeLoading, handleReset, ...rest } =
    useMedicineForm();
  const { createMedicine } = useMedicineServices();

  function handleAdd() {
    handleSubmit({
      next(urls) {
        createMedicine({
          body: { ...form, images: urls },
          onFinally() {
            handleChangeLoading(false);
          },
          onError() {
            error({
              id: "product-creation",
              message: "Hubo un error creando el producto",
            });
          },
          onSuccess() {
            success({
              id: "create-product",
              message: "Producto creado con éxito",
            });

            handleReset();
          },
        });
      },
    });
  }

  return { form, handleAdd, ...rest };
}
