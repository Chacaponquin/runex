"use client";

import {
  CheckOne,
  CreditCard,
  Lock,
  Money,
} from "@modules/app/modules/icon/components";
import { PAYMENT_METHODS } from "../constants";
import { Adventage, PaymentMethod, PersonalForm } from "../interfaces";
import { useState } from "react";

export default function useCheckout() {
  const [selectedMethod, setSelectedMethod] = useState<PAYMENT_METHODS>(
    PAYMENT_METHODS.CARD
  );
  const [personalForm, setPersonalForm] = useState<PersonalForm>({
    address: "",
    email: "",
    firstName: "",
    lastName: "",
    note: "",
    phone: "",
  });

  const methods: Array<PaymentMethod> = [
    {
      method: PAYMENT_METHODS.CARD,
      name: "Tarjeta de crédito",
      icon: CreditCard,
    },
    { method: PAYMENT_METHODS.CASH, name: "Cash", icon: Money },
  ];

  const adventages: Array<Adventage> = [
    {
      icon: Lock,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo beatae praesentium rerum sunt ab fuga obcaecati? Aut numquam aperiam placeat",
      title: "Your information is Safe",
    },
    {
      icon: CheckOne,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo beatae praesentium rerum sunt ab fuga obcaecati? Aut numquam aperiam placeat",
      title: "Security Chekout",
    },
  ];

  function handleChangeSelectedMethod(method: PAYMENT_METHODS): void {
    setSelectedMethod(method);
  }

  function handleChangeForm(key: keyof PersonalForm, value: string): void {
    setPersonalForm((prev) => ({ ...prev, [key]: value }));
  }

  function handlePayment() {}

  return {
    methods,
    handleChangeSelectedMethod,
    selectedMethod,
    personalForm,
    handlePayment,
    adventages,
    handleChangeForm,
  };
}
