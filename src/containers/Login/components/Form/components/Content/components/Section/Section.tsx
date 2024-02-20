interface Props {
  children: React.ReactNode;
  id: string;
  title: string;
}

export default function Section({ children, id, title }: Props) {
  return (
    <section className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-fontMedium text-lg">
        {title}
      </label>
      {children}
    </section>
  );
}
