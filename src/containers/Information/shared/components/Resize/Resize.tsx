import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className: string;
}

export default function Resize({ children, className }: Props) {
  return (
    <div className={clsx("flex justify-center px-10 w-full", className)}>
      <div className="w-full max-w-[1000px]">{children}</div>
    </div>
  );
}
