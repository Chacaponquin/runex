interface Props {
  provider: string;
}

export default function Provider({ provider }: Props) {
  return <p className="text-gray-500 text-xl esm:text-lg">({provider})</p>;
}
