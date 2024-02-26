interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Section({ children, title }: Props) {
  return (
    <section className="flex flex-col">
      <label className="text-lg font-fontMedium mb-1">{title}</label>

      {children}
    </section>
  );
}
