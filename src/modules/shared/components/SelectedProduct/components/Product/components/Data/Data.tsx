import { Counter } from "@modules/cart/components";
import { ProductForm } from "../../../../interfaces";
import { Buttons, Info, Name } from "./components";
import React from "react";
import { Section } from "@modules/shared/components/SelectedProduct/shared/components";

interface Props {
  name: string;
  price: string;
  provider: string;
  handleAddToCart(): void;
  handleBuyNow(): void;
  form: ProductForm;
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
  extra: React.ReactNode;
  loading: boolean;
}

export default function Data({
  name,
  price,
  provider,
  form,
  handleAddToCart,
  handleBuyNow,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  loading,
  extra,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      <Name name={name} loading={loading} />

      <Info loading={loading} price={price} provider={provider} />

      {!loading && (
        <div className="flex flex-col gap-y-3.5 w-full lg:mb-12 mb-9 esm:mb-7">
          {extra}

          <Section text="Cantidad" selected={form.quantity}>
            <Counter
              disableDecrease={false}
              disableIncrease={false}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              quantity={form.quantity}
            />
          </Section>
        </div>
      )}

      {!loading && (
        <Buttons
          handleAddToCart={handleAddToCart}
          handleBuyNow={handleBuyNow}
        />
      )}
    </div>
  );
}
