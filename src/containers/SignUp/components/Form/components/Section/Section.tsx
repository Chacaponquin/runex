import clsx from "clsx";

interface Props {
  vertical: boolean;
  children: React.ReactNode;
}

export default function Section({ children, vertical }: Props) {
  const CLASS = clsx("grid", "w-full", "gap-4", "esm:grid-cols-1", {
    "grid-cols-1": vertical,
    "grid-cols-2": !vertical,
  });

  return <section className={CLASS}>{children}</section>;
}
