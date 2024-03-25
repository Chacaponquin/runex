interface Props {
  text: string;
}

export default function Header({ text }: Props) {
  return (
    <header className="flex justify-between mb-3 items-center">
      <h1 className="text-2xl font-fontSemiBold">{text}</h1>
    </header>
  );
}
