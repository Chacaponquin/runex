import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";

interface Props {
  icon: React.FC<IconProps>;
  handleClick(): void;
  disabled: boolean;
}

export default function Button({ icon, handleClick, disabled }: Props) {
  const CLASS = clsx("", {
    "fill-black": !disabled,
    "fill-gray-500": disabled,
  });

  return (
    <button className={CLASS} onClick={handleClick} disabled={disabled}>
      {icon({ size: 22 })}
    </button>
  );
}
