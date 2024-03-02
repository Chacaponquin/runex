interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ children, title }: Props) {
  return (
    <section className="flex flex-col w-full mb-10">
      <h1 className="font-fontMedium mb-4 text-xl">{title}</h1>

      {children}
    </section>
  );
}
