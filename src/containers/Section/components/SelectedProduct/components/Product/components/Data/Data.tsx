import { ProductForm } from "@containers/Section/components/SelectedProduct/interfaces";
import {
  Buttons,
  Color,
  Counter,
  Name,
  Price,
  Provider,
  Section,
  Size,
} from "./components";
import { Product } from "@modules/product/domain";

interface Props {
  name: string;
  price: string;
  sizes: Array<string>;
  colors: Array<string>;
  provider: string;
  handleAddToCart(): void;
  handleBuyNow(): void;
  form: ProductForm;
  handleChangeForm(key: keyof ProductForm, value: unknown): void;
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
}

export default function Data({
  name,
  colors,
  price,
  sizes,
  provider,
  form,
  handleAddToCart,
  handleBuyNow,
  handleChangeForm,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      <Name name={name} />

      <div className="w-full flex gap-x-4 items-center mb-6">
        <Price price={price} />
        <Provider provider={provider} />
      </div>

      <div className="flex flex-col gap-y-3.5 w-full lg:mb-12 mb-9 esm:mb-7">
        {sizes.length > 0 && (
          <Section text="Talla" selected={form.size}>
            <div className="flex gap-x-3">
              {sizes.map((s, index) => (
                <Size
                  key={index}
                  size={s}
                  selected={s === form.size}
                  handleChange={() => handleChangeForm("size", s)}
                />
              ))}
            </div>
          </Section>
        )}

        {colors.length > 0 && (
          <Section text="Color" selected={form.color}>
            <div className="flex gap-x-3">
              {colors.map((c, index) => (
                <Color
                  key={index}
                  handleChange={() => handleChangeForm("color", c)}
                  color={Product.hexColor(c)}
                  selected={c === form.color}
                />
              ))}
            </div>
          </Section>
        )}

        <Section text="Cantidad" selected={form.quantity}>
          <Counter
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            quantity={form.quantity}
          />
        </Section>
      </div>

      <Buttons handleAddToCart={handleAddToCart} handleBuyNow={handleBuyNow} />
    </div>
  );
}
