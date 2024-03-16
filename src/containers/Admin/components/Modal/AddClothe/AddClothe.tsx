"use client";

import { FormSection, Modal } from "@containers/Admin/shared/components";
import {
  InputNumber,
  InputText,
  Select,
} from "@modules/app/modules/form/components";
import { useAddClothe } from "./hooks";
import { Buttons, Colors, Header, ImageInput, Sizes } from "./components";

export default function AddClothe() {
  const {
    form,
    handleChangeName,
    handleChangePrice,
    handleCancel,
    handleSave,
    providers,
    handleChangeProvider,
  } = useAddClothe();

  return (
    <Modal className="flex flex-col" max={900} handleSubmit={handleSave}>
      <Header />

      <section className="grid grid-cols-2 gap-x-6 w-full">
        <ImageInput />

        <div className="flex flex-col gap-y-5 mb-6">
          <FormSection label="Nombre">
            <InputText
              type="text"
              name="product-name"
              onChange={handleChangeName}
              placeholder="Nombre"
              size="lg"
              value={form.name}
            />
          </FormSection>

          <FormSection label="Precio">
            <InputNumber
              value={form.price}
              onChange={handleChangePrice}
              name="product-price"
              step={1}
              size="lg"
            />
          </FormSection>

          <FormSection label="Tallas">
            <Sizes />
          </FormSection>

          <FormSection label="Colores">
            <Colors />
          </FormSection>

          <FormSection label="Provedor">
            <Select
              labelKey="name"
              options={providers}
              valueKey="name"
              onChange={handleChangeProvider}
              value={form.provider}
              placeholder="Provedor"
            />
          </FormSection>
        </div>
      </section>

      <Buttons handleCancel={handleCancel} />
    </Modal>
  );
}
