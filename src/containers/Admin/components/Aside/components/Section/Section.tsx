import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  title: string;
  icon: React.FC<IconProps>;
  active: boolean;
  url: string;
}

export default function Section({ icon, title, active, url }: Props) {
  const CLASS = clsx(
    "rounded",
    "flex items-center",
    "gap-6",
    "py-3 px-5",
    {
      "bg-blue-500": active,
    },
    { "stroke-black": !active, "stroke-white": active },
    { "text-white": active, "text-black": !active }
  );

  return (
    <Link href={url}>
      <li className={CLASS}>
        <i>{icon({ size: 24 })}</i>

        <h2>{title}</h2>
      </li>
    </Link>
  );
}
