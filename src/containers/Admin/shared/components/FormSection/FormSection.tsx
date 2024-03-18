interface Props {
  children: React.ReactNode;
  label: string;
  required: boolean;
}

export default function FormSection({ children, label, required }: Props) {
  return (
    <section className="flex flex-col">
      <label className="text-lg mb-1 font-fontMedium">
        {label} <span className="text-red-500">{required ? "*" : ""}</span>
      </label>
      {children}
    </section>
  );
}
