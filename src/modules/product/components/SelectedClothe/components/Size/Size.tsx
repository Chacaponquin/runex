import clsx from "clsx";

interface Props {
  selected: boolean;
  size: string;
  handleChange(): void;
}

export default function Size({ handleChange, selected, size }: Props) {
  const CLASS = clsx(
    "font-fontMedium",
    "px-2 py-1",
    "rounded",
    "text-base",

    { "bg-dark-950": selected, "bg-gray-50": !selected },

    { "text-white": selected, "text-black": !selected },

    { "border-[2px] border-gray-100": !selected }
  );

  return (
    <button className={CLASS} onClick={handleChange}>
      {size}
    </button>
  );
}
