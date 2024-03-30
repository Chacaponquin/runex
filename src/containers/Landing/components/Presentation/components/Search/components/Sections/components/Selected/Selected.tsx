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
    "px-5 py-2 esm:px-2",
    "rounded",
    "bg-blue-500",
    "gap-x-4"
  );

  return (
    <div className={CLASS}>
      <i className="stroke-white">{icon({ size: 26 })}</i>
      <span className="text-base font-fontMedium esm:hidden">{title}</span>
    </div>
  );
}
