import clsx from "clsx";

interface Props {
  handleChange(): void;
  color: string;
  selected: boolean;
}

export default function Color({ color, handleChange, selected }: Props) {
  const CLASS = clsx(
    "min-w-[25px] min-h-[25px]",
    "flex justify-center items-center",
    "rounded-full"
  );

  return (
    <button
      className={CLASS}
      style={{ backgroundColor: `${color}` }}
      onClick={handleChange}
    >
      {selected && (
        <div className="min-w-[15px] bg-white rounded-full min-h-[15px]"></div>
      )}
    </button>
  );
}
