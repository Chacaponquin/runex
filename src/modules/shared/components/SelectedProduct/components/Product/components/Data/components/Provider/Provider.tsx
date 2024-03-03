interface Props {
  provider: string;
}

export default function Provider({ provider }: Props) {
  return <p className="text-gray-500 text-lg esm:text-base">({provider})</p>;
}
