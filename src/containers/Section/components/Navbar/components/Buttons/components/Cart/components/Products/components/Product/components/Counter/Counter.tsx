import { Minus, Plus } from "@modules/app/modules/icon/components";
import React from "react";
import { Button } from "./components";

interface Props {
  quantity: number;
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
}

export default function Counter({
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: Props) {
  return (
    <div className="flex rounded-xl border-[1px] border-gray-100">
      <Button
        icon={Minus}
        handleClick={handleDecreaseQuantity}
        disabled={false}
      />

      <span className="flex items-center px-4">{quantity}</span>

      <Button
        icon={Plus}
        handleClick={handleIncreaseQuantity}
        disabled={false}
      />
    </div>
  );
}
