interface Props {
  text: string;
}

export default function Header({ text }: Props) {
  return (
    <header className="mt-10 mb-4">
      <h1 className="font-fontSemiBold text-4xl">{text}</h1>
    </header>
  );
}
