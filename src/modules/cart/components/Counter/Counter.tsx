import { Minus, Plus } from "@modules/app/modules/icon/components";
import { Button } from "./components";

interface Props {
  quantity: number;
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
  disableDecrease: boolean;
  disableIncrease: boolean;
}

export default function Counter({
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  disableDecrease,
  disableIncrease,
}: Props) {
  return (
    <div className="flex rounded border-[1px] border-gray-200">
      <Button
        icon={Minus}
        handleClick={handleDecreaseQuantity}
        disabled={disableDecrease}
      />

      <span className="flex items-center px-3 text-sm">{quantity}</span>

      <Button
        icon={Plus}
        handleClick={handleIncreaseQuantity}
        disabled={disableIncrease}
      />
    </div>
  );
}
