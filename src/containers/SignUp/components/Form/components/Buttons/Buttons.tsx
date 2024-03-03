interface Props {
  loading: boolean;
}

export default function Buttons({ loading }: Props) {
  return (
    <section className="flex justify-end w-full mt-4 esm:mt-2">
      <button
        className="transition-all duration-200 hover:opacity-70 px-8 esm:px-7 esm:py-2 text-lg py-3 rounded-full bg-blue-500 font-fontMedium"
        disabled={loading}
      >
        Crear cuenta
      </button>
    </section>
  );
}
