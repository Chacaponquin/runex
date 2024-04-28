interface Props {
  value: string;
}

export default function Price({ value }: Props) {
  return <p className="text-base font-fontMedium text-left">{value}</p>;
}
