interface Props {
  provider: string;
}

export default function Provider({ provider }: Props) {
  return <p className="text-sm text-gray-500">{provider}</p>;
}
