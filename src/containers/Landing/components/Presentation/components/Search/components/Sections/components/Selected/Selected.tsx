import { ArrowDown } from "@modules/app/modules/icon/components";
import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";

interface Props {
  icon: React.FC<IconProps>;
  title: string;
}

export default function Selected({ icon, title }: Props) {
  const CLASS = clsx(
    "flex items-center",
    "text-white",
    "cursor-pointer",
    "pl-5 pr-3 py-2 esm:px-2",
    "rounded",
    "bg-blue-500"
  );

  return (
    <div className={CLASS}>
      <i className="stroke-white mr-4 esm:mr-0">{icon({ size: 26 })}</i>

      <span className="text-base font-fontMedium esm:hidden">{title}</span>

      <i className="stroke-white ml-3 esm:hidden">
        <ArrowDown size={23} />
      </i>
    </div>
  );
}
