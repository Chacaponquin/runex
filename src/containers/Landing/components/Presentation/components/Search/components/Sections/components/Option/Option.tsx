import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";

interface Props {
  icon: React.FC<IconProps>;
  title: string;
  handleClick(): void;
  show: boolean;
}

export default function Option({ handleClick, icon, title, show }: Props) {
  const CLASS = clsx(
    "flex items-center justify-center",
    "gap-x-3",
    "bg-white",
    "py-2.5 px-5",
    "w-full",
    "cursor-pointer",
    "transition-all duration-200",
    "hover:bg-gray-50",

    { hidden: !show }
  );

  return (
    <li className={CLASS} onClick={handleClick}>
      <i className="stroke-black">{icon({ size: 24 })}</i>
      <span className="text-base">{title}</span>
    </li>
  );
}
