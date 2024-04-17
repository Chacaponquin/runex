import { IconProps } from "@modules/app/modules/icon/interfaces";
import { RefObject } from "react";

interface Props {
  buttonRef: RefObject<HTMLButtonElement>;
  handleClick(): void;
  icon: React.FC<IconProps>;
}

export default function Button({ buttonRef, handleClick, icon }: Props) {
  return (
    <button
      className="flex stroke-black dark:stroke-white justify-center text-center items-center w-full cursor-auto"
      type="button"
      onClick={handleClick}
      ref={buttonRef}
    >
      {icon({ size: 15 })}
    </button>
  );
}
