"use client";

import { Header, Methods, PersonalInfo, Adventages } from "./components";
import { useCheckout } from "./hooks";
import { Resize } from "./shared/components";

export default function Checkout() {
  const {
    methods,
    handleChangeSelectedMethod,
    selectedMethod,
    personalForm,
    handlePayment,
    adventages,
    handleChangeForm,
  } = useCheckout();

  return (
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
          />

          <Adventages adventages={adventages} />
        </Resize>
      </main>
    </div>
  );
}
