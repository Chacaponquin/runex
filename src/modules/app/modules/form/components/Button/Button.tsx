import clsx from "clsx";

interface Props {
  handleClick(): void;
  text: string;
  id: string;
  size: "sm" | "lg" | "xl";
  rounded: "sm" | "lg" | "full";
}

export default function Button({
  handleClick,
  id,
  text,
  rounded,
  size,
}: Props) {
  const CLASS = clsx(
    "font-fontMedium",
    "bg-blue-500",
    "text-white",
    "transition-all duration-300",
    "hover:opacity-70",
    {
      "rounded-full": rounded === "full",
      "rounded-lg": rounded === "lg",
      "rounded-sm": rounded === "sm",
    },
    {
      "text-lg": size === "lg",
      "text-base": size === "sm",
      "text-xl": size === "xl",
    },
    {
      "px-7 py-2": size === "lg" || size === "sm",
      "px-9 py-3": size === "xl",
    }
  );

  return (
    <button className={CLASS} onClick={handleClick} id={id}>
      {text}
    </button>
  );
}
