import clsx from "clsx";

interface Props {
  completed: boolean;
}

export default function Completed({ completed }: Props) {
  const CLASS = clsx(
    "w-max",
    "rounded-full",
    "text-sm",
    "px-4 py-1.5",
    { "bg-green-100": completed, "bg-yellow-100": !completed },
    {
      "text-green-500": completed,
      "text-yellow-400": !completed,
    }
  );

  return (
    <div className={CLASS}>
      <span>{completed ? "Completada" : "En espera"}</span>
    </div>
  );
}
