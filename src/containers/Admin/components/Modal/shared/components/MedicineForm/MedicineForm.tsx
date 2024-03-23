import { FormSection, ImageInput } from "@containers/Admin/shared/components";
import { MedicineForm as IMedicineForm } from "../../../interfaces";
import {
  InputNumber,
  InputText,
  Select,
} from "@modules/app/modules/form/components";
import { ProductCategory, Provider } from "@modules/product/domain";

interface Props {
  form: IMedicineForm;
  handleChangeProvider(s: string): void;
  categories: Array<ProductCategory>;
  providers: Array<Provider>;
  handleChangeImages(f: FileList): void;
  handleDeleteImage(id: string): void;
  handleChangeName(n: string): void;
  handleChangePrice(v: number): void;
  handleChangeCategory(v: string): void;
}

export default function MedicineForm({
  form,
  categories,
  handleChangeProvider,
  providers,
  handleChangeImages,
  handleChangeName,
  handleChangePrice,
  handleDeleteImage,
  handleChangeCategory,
}: Props) {
  return (
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
            min={0}
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
  );
}
