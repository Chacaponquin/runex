"use client";

import { Redirect } from "@modules/app/components";
import { Header, Methods, PersonalInfo, Adventages } from "./components";
import { useCheckout } from "./hooks";
import { Resize } from "./shared/components";
import { useCart } from "@modules/cart/hooks";
import { APP_ROUTES } from "@modules/app/constants";

export default function Checkout() {
  const {
    methods,
    handleChangeSelectedMethod,
    selectedMethod,
    personalForm,
    handlePayment,
    adventages,
    handleChangeForm,
    loading,
  } = useCheckout();

  const { cart } = useCart();

  return (
    <Redirect condition={cart.length > 0} url={APP_ROUTES.ROOT}>
      <div className="flex flex-col w-full items-center">
        <Header />

        <main className="flex flex-col w-full">
          <Resize className="flex flex-col">
            <Methods
              methods={methods}
              selectedMethod={selectedMethod}
              handleChangeSelectedMethod={handleChangeSelectedMethod}
            />

            <PersonalInfo
              form={personalForm}
              handlePayment={handlePayment}
              handleChangeForm={handleChangeForm}
              loading={loading}
            />

            <Adventages adventages={adventages} />
          </Resize>
        </main>
      </div>
    </Redirect>
  );
}
