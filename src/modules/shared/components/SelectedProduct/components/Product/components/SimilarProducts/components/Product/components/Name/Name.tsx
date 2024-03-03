import clsx from "clsx";

interface Props {
  name: string;
  hover: boolean;
}

export default function Name({ name, hover }: Props) {
  const CLASS = clsx("font-fontMedium", "text-lg", "mt-2", {
    "underline underline-offset-4": hover,
  });

  return <h2 className={CLASS}>{name}</h2>;
}
