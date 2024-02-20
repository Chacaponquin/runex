import clsx from "clsx";

interface Props {
  loading: boolean;
}

export default function Button({ loading }: Props) {
  const CLASS = clsx(
    "w-full",
    "rounded",
    "text-white",
    "px-5 py-2",
    "font-fontMedium",
    "text-lg",
    "transition-all duration-200",
    "bg-blue-500",
    {
      "opacity-70": loading,
      "hover:opacity-70": !loading,
    }
  );

  return (
    <section className="w-full mb-6">
      <button className={CLASS} disabled={loading}>
        Login
      </button>
    </section>
  );
}
