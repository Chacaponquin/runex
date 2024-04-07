import { SCREEN_SIZES } from "@modules/app/constants";
import { IconProps } from "@modules/app/modules/icon/interfaces";
import { useScreen } from "@modules/shared/hooks";
import clsx from "clsx";

interface Props {
  icon: React.FC<IconProps>;
  handleClick(): void;
  selected: boolean;
}

export default function Button({ handleClick, selected, icon }: Props) {
  const { condition } = useScreen(SCREEN_SIZES.ESM);

  const CLASS = clsx(
    "p-3 esm:p-2.5",
    "border-[2px] border-gray-100",
    "transition-all duration-200",
    "rounded-full",

    {
      "hover:bg-blue-500 hover:stroke-white hover:border-blue-500 bg-white stroke-black":
        !selected,
      "bg-blue-500 stroke-white border-blue-500": selected,
    }
  );

  return (
    <button className={CLASS} onClick={handleClick}>
      {icon({ size: condition ? 22 : 20 })}
    </button>
  );
}
