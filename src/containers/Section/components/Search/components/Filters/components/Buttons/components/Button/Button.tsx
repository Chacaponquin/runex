import clsx from "clsx";

interface Props {
  text: string;
  handleClick?: () => void;
  color: "dark" | "light";
  type: "button" | "submit";
}

export default function Button({ text, handleClick, color, type }: Props) {
  const CLASS = clsx(
    "px-4 py-2 esm:py-1.5",
    "text-white",
    "text-lg esm:text-base",
    "font-fontMedium",
    "rounded",
    "transition-all duration-200",
    "hover:opacity-70",
    {
      "bg-blue-500": color === "light",
      "bg-dark-950": color === "dark",
    }
  );

  return (
    <button type={type} onClick={handleClick} className={CLASS}>
      {text}
    </button>
  );
}
