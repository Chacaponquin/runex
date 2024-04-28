import clsx from "clsx";

interface Props {
  handleChange(): void;
  color: string;
  selected: boolean;
}

export default function Color({ color, handleChange, selected }: Props) {
  const CLASS = clsx(
    "min-w-[30px] min-h-[30px]",
    "flex justify-center items-center",
    "rounded",
    { "shadow-input": selected }
  );

  return (
    <button
      className={CLASS}
      onClick={handleChange}
      style={{ backgroundColor: `${color}` }}
    ></button>
  );
}
