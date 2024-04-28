import clsx from "clsx";

interface Props {
  name: string;
  date: string;
}

export default function Header({ name, date }: Props) {
  const CLASS = clsx(
    "flex flex-col",
    "mb-4",
    "w-full",
    "text-white",
    "bg-blue-500",
    "px-10 py-6",
    "rounded-sm"
  );

  return (
    <header className={CLASS}>
      <h1 className="font-fontBold text-4xl mb-2">{name}</h1>
      <h2 className="text-xl font-fontMedium">{date}</h2>
    </header>
  );
}
