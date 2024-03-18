import { useId } from "react";
import { Input } from "./components";

interface Props {
  priceMin: number;
  priceMax: number;
  handleChangePriceMin(v: number): void;
  handleChangePriceMax(v: number): void;
}

export default function PriceInput({
  priceMax,
  priceMin,
  handleChangePriceMax,
  handleChangePriceMin,
}: Props) {
  const priceMinId = useId();
  const priceMaxId = useId();

  return (
    <div className="flex items-center justify-between gap-x-4">
      <Input
        id={priceMinId}
        value={priceMin}
        max={priceMax}
        min={0}
        name="price-min"
        onChange={handleChangePriceMin}
      />

      <p className="text-base">hasta</p>

      <Input
        id={priceMaxId}
        value={priceMax}
        name="price-max"
        max={99999999}
        min={priceMin}
        onChange={handleChangePriceMax}
      />
    </div>
  );
}
