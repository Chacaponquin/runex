import { Minus, Plus } from "@modules/app/modules/icon/components";
import { Button } from "./components";

interface Props {
  quantity: number;
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
}

export default function Counter({
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  quantity,
}: Props) {
  return (
    <div className="flex rounded border-[2px] border-gray-200 items-center gap-x-2">
      <Button
        handleClick={handleDecreaseQuantity}
        disabled={false}
        icon={Minus}
      />

      <p className="text-base">{quantity}</p>

      <Button
        handleClick={handleIncreaseQuantity}
        disabled={false}
        icon={Plus}
      />
    </div>
  );
}
