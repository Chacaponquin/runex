interface Props {
  name: string;
}

export default function Name({ name }: Props) {
  return (
    <h1 className="font-fontSemiBold text-3xl text-left mb-4 esm:mb-2.5 esm:text-2xl">
      {name}
    </h1>
  );
}
