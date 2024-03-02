import { InputNumber } from "@modules/app/modules/form/components";

interface Props {
  min: number;
  max: number;
  id: string;
  name: string;
  value: number;
}

export default function Input({ id, max, min, name, value }: Props) {
  return (
    <InputNumber
      id={id}
      max={max}
      value={value}
      min={min}
      name={name}
      step={1}
    />
  );
}
