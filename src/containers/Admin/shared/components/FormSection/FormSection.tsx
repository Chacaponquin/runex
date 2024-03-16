interface Props {
  children: React.ReactNode;
  label: string;
}

export default function FormSection({ children, label }: Props) {
  return (
    <section className="flex flex-col">
      <label className="text-lg mb-1 font-fontMedium">{label}</label>
      {children}
    </section>
  );
}
