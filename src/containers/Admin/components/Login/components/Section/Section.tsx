interface Props {
  children: React.ReactNode;
  label: string;
}

export default function Section({ children, label }: Props) {
  return (
    <section className="flex flex-col mb-4">
      <label className="text-base mb-1">{label}</label>
      {children}
    </section>
  );
}
