import { SCREEN_SIZES } from "@modules/app/constants";
import { IconProps } from "@modules/app/modules/icon/interfaces";
import { useScreen } from "@modules/shared/hooks";

interface Props {
  icon: React.FC<IconProps>;
  handleClick(): void;
  disabled: boolean;
}

export default function Button({ handleClick, disabled, icon }: Props) {
  const { bigScreen } = useScreen(SCREEN_SIZES.ESM);

  return (
    <button
      className="rounded-full stroke-black bg-white p-3 esm:p-2.5 transition-all duration-200 hover:bg-blue-500 hover:stroke-white border-[2px] border-gray-100"
      onClick={handleClick}
      disabled={disabled}
    >
      {icon({ size: bigScreen ? 22 : 20 })}
    </button>
  );
}
