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
    handleChangeImages,
    handleDeleteImage,
    handleAddSize,
    handleDeleteSize,
    handleAddColor,
    handleDeleteColor,
    handleChangeCategory,
    categories,
    loading,
  } = useAddClothe();

  return (
    <Modal className="flex flex-col" max={1100} handleSubmit={handleSave}>
      <Header />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 w-full">
        <ImageInput
          handleChangeImages={handleChangeImages}
          images={form.images}
          handleDeleteImage={handleDeleteImage}
        />

        <div className="flex flex-col gap-y-5 mb-6">
          <FormSection label="Nombre" required>
            <InputText
              type="text"
              name="product-name"
              onChange={handleChangeName}
              placeholder="Nombre"
              size="lg"
              value={form.name}
            />
          </FormSection>

          <FormSection label="Precio" required>
            <InputNumber
              value={form.price}
              onChange={handleChangePrice}
              name="product-price"
              step={1}
              size="lg"
            />
          </FormSection>

          <FormSection label="Tallas" required>
            <Sizes
              sizes={form.sizes}
              handleAddSize={handleAddSize}
              handleDeleteSize={handleDeleteSize}
            />
          </FormSection>

          <FormSection label="Colores" required>
            <Colors
              handleAddColor={handleAddColor}
              handleDeleteColor={handleDeleteColor}
            />
          </FormSection>

          <FormSection label="Provedor" required>
            <Select
              labelKey="name"
              options={providers}
              valueKey="name"
              onChange={handleChangeProvider}
              value={form.provider}
              placeholder="Provedor"
            />
          </FormSection>

          <FormSection label="Categoría" required>
            <Select
              value={form.category}
              options={categories}
              labelKey="name"
              valueKey="name"
              onChange={handleChangeCategory}
              placeholder="Categoría"
            />
          </FormSection>
        </div>
      </section>

      <Buttons handleCancel={handleCancel} loading={loading} />
    </Modal>
  );
}
