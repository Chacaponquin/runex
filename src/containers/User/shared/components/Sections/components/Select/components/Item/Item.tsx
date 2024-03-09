import clsx from "clsx";
import Link from "next/link";

interface Props {
  url: string;
  label: string;
  active: boolean;
}

export default function Item({ label, url, active }: Props) {
  const CLASS = clsx(
    "text-xl",
    "font-fontMedium",
    active ? "text-black" : "text-gray-500"
  );

  return (
    <Link href={url}>
      <li className={CLASS}>{label}</li>
    </Link>
  );
}
