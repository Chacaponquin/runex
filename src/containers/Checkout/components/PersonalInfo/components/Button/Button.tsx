import clsx from "clsx";

export default function Button() {
  const CLASS = clsx(
    "rounded",
    "font-fontMedium",
    "px-7 py-2.5 esm:py-2 esm:px-6",
    "text-white",
    "shadow-lg",
    "bg-blue-600",
    "text-xl esm:text-lg",
    "uppercase",
    "w-full",
    "transition-all duration-200",
    "hover:opacity-70"
  );

  return (
    <section className="mt-5 w-full">
      <button type="submit" className={CLASS}>
        Ordenar
      </button>
    </section>
  );
}
