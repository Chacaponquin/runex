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
    "hover:bg-gray-100",
    "bg-gray-50"
  );

  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  );
}
