import { FormSection } from "@containers/Admin/shared/components";
import { Colors, ImageInput, Sizes } from "./components";
import {
  InputNumber,
  InputText,
  Select,
} from "@modules/app/modules/form/components";
import { ClotheForm as IClotheForm } from "../../../interfaces";
import { ProductCategory, Provider } from "@modules/product/domain";

interface Props {
  form: IClotheForm;
  handleChangeImages(f: FileList): void;
  handleDeleteImage(id: string): void;
  handleChangeName(n: string): void;
  handleChangePrice(v: number): void;
  handleAddSize(s: string): void;
  handleDeleteSize(i: number): void;
  handleChangeCategory(v: string): void;
  handleAddColor(v: string): void;
  handleDeleteColor(i: string): void;
  handleChangeProvider(s: string): void;
  categories: Array<ProductCategory>;
  providers: Array<Provider>;
}

export default function ClotheForm({
  form,
  handleAddSize,
  handleChangeImages,
  handleChangeName,
  handleChangePrice,
  handleDeleteImage,
  handleDeleteSize,
  handleAddColor,
  handleChangeCategory,
  handleDeleteColor,
  categories,
  handleChangeProvider,
  providers,
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
            colors={form.colors}
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
