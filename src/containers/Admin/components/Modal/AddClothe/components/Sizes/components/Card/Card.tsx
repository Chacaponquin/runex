import { Close } from "@modules/app/modules/icon/components";
import clsx from "clsx";

interface Props {
  size: string;
  handleDeleteSize(): void;
}

export default function Card({ size, handleDeleteSize }: Props) {
  const CLASS = clsx(
    "flex items-center",
    "gap-x-2",
    "bg-blue-100",
    "px-2 py-0.5",
    "text-blue-600",
    "stroke-blue-600",
    "rounded-full"
  );

  return (
    <article className={CLASS}>
      <p className="text-sm">{size}</p>

      <button type="button" onClick={handleDeleteSize}>
        <Close size={14} />
      </button>
    </article>
  );
}
