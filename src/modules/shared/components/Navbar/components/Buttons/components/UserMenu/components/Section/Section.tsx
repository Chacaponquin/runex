import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  border: "top" | "bottom";
}

export default function Section({ children, border }: Props) {
  const CLASS = clsx("flex flex-col", "w-full", {
    "border-b-2": border === "bottom",
    "border-t-2": border === "top",
  });

  return <section className={CLASS}>{children}</section>;
}
