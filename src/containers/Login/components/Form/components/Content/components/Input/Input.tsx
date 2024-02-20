import clsx from "clsx";

interface Props {
  type: "password" | "email";
  id: string;
  name: string;
  value: string;
  handleChange(v: string): void;
  placeholder: string;
}

export default function Input({
  type,
  id,
  name,
  handleChange,
  value,
  placeholder,
}: Props) {
  const CLASS = clsx(
    "outline-none",
    "rounded",
    "border-[2px] border-gray-200",
    "px-5 py-2",
    "transition-all duration-200",
    "focus:border-blue-500 focus:shadow-input",
    "hover:shadow-input hover:border-blue-500"
  );

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className={CLASS}
      placeholder={placeholder}
    />
  );
}
