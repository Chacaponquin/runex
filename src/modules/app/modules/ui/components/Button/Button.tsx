import clsx from "clsx";

interface Props {
  text: string;
  handleClick?: () => void;
  color: "primary" | "cancel" | "danger";
  disabled: boolean;
  size: "sm" | "lg" | "xl";
  rounded: "full" | "lg" | "sm";
  type?: "button" | "submit";
}

export default function Button({
  color,
  disabled,
  handleClick,
  text,
  size,
  rounded,
  type,
}: Props) {
  const CLASS = clsx(
    "transition-all duration-200",
    "hover:opacity-70",
    "font-fontMedium",

    {
      "bg-blue-500": color === "primary",
      "bg-gray-100": color === "cancel",
      "bg-red-400": color === "danger",
    },

    {
      "px-4 py-1.5": size === "sm",
      "px-5 py-2": size === "lg",
      "px-7 py-2.5": size === "xl",
    },

    {
      "text-white": color === "primary" || color === "danger",
      "text-black": color === "cancel",
    },

    {
      "rounded-full": rounded === "full",
      rounded: rounded === "sm",
      "rounded-lg": rounded === "lg",
    },

    {
      "text-base": size === "lg",
      "text-lg": size === "xl",
      "text-sm": size === "sm",
    },

    { "opacity-70": disabled }
  );

  return (
    <button
      className={CLASS}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}
