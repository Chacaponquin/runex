import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";

interface Props {
  handleClick(): void;
  icon: React.FC<IconProps>;
  disabled: boolean;
}

export default function Button({ handleClick, icon, disabled }: Props) {
  const CLASS = clsx("flex items-center justify-center", "py-2 px-1.5", {
    "stroke-black": disabled,
    "stroke-blue-500": !disabled,
  });

  return (
    <button className={CLASS} onClick={handleClick}>
      {icon({ size: 15 })}
    </button>
  );
}
