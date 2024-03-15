interface Props {
  children: React.ReactNode;
  label: string;
}

export default function FormSection({ children, label }: Props) {
  return (
    <section className="flex flex-col">
      <label>{label}</label>
      {children}
    </section>
  );
}
