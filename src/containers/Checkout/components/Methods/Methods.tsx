import { PaymentMethod } from "@containers/Checkout/interfaces";
import { Card } from "./components";
import { PAYMENT_METHODS } from "@containers/Checkout/constants";
import { Section } from "@containers/Checkout/shared/components";

interface Props {
  methods: Array<PaymentMethod>;
  selectedMethod: PAYMENT_METHODS;
  handleChangeSelectedMethod(m: PAYMENT_METHODS): void;
}

export default function Methods({
  methods,
  handleChangeSelectedMethod,
  selectedMethod,
}: Props) {
  return (
    <Section title="Método de pago">
      <div className="grid grid-cols-2 esm:grid-cols-1 gap-x-2 gap-y-3">
        {methods.map((m, index) => (
          <Card
            key={index}
            name={m.name}
            handleClick={() => handleChangeSelectedMethod(m.method)}
            icon={m.icon}
            selected={m.method === selectedMethod}
          />
        ))}
      </div>
    </Section>
  );
}
