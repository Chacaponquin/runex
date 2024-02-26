import { IconProps } from "@modules/app/modules/icon/interfaces";
import { RefObject } from "react";

interface Props {
  buttonRef: RefObject<HTMLButtonElement>;
  onMouseEnter(): void;
  onMouseLeave(): void;
  handleClick(): void;
  icon: React.FC<IconProps>;
}

export default function Button({
  buttonRef,
  onMouseEnter,
  onMouseLeave,
  handleClick,
  icon,
}: Props) {
  return (
    <button
      className="flex stroke-black dark:stroke-white justify-center text-center items-center w-full cursor-auto"
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      ref={buttonRef}
    >
      {icon({ size: 15 })}
    </button>
  );
}
