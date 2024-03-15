import clsx from "clsx";

interface Props {
  text: string;
  handleClick(): void;
  color: "primary";
  disabled: boolean;
  size: "sm" | "lg" | "xl";
}

export default function Button({
  color,
  disabled,
  handleClick,
  text,
  size,
}: Props) {
  const CLASS = clsx(
    "text-white",
    "rounded",
    "transition-all duration-200",
    "hover:opacity-70",
    "font-fontMedium",
    { "bg-blue-500": color === "primary" },
    {
      "px-4 py-1.5": size === "sm",
      "px-5 py-2": size === "lg",
      "px-8 py-3": size === "xl",
    }
  );

  return (
    <button className={CLASS} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
}
