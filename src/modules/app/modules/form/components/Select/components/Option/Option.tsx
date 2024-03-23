import clsx from "clsx";

interface Props {
  onClick(): void;
  text: string;
  selected: boolean;
}

export default function Option({ onClick, text, selected }: Props) {
  const className = clsx(
    "py-2 px-4",
    "cursor-pointer",
    "duration-300 transition-all",
    "bg-gray-50",

    { "bg-gray-100": selected, "hover:bg-gray-100": !selected }
  );

  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  );
}
