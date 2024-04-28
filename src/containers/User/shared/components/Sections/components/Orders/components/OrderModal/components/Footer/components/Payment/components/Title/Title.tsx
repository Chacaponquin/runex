interface Props {
  value: string;
}

export default function Title({ value }: Props) {
  return (
    <p className="text-base text-left font-fontMedium text-gray-600">{value}</p>
  );
}
