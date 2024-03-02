import clsx from "clsx";

interface Props {
  type: "email" | "text";
  value: string;
  placeholder: string;
  handleChange(v: string): void
  name: string
}

export default function Input({ type, value, placeholder , handleChange}: Props) {
  const CLASS = clsx(
    "w-full",
    "bg-transparent",
    "outline-none",
    "px-4 py-2",
    "rounded",
    "border-[2px] border-gray-200",
    "transition-all duration-200",
    "focus:shadow-input focus:border-blue-500"
  );

  return (
    <input
      type={type}
      value={value}
      className={CLASS}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
