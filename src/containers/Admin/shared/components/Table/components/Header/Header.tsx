interface Props {
  header: string;
}

export default function Header({ header }: Props) {
  return (
    <header className="flex w-full justify-between mb-4">
      <h1 className="font-fontMedium text-xl">{header}</h1>
    </header>
  );
}
