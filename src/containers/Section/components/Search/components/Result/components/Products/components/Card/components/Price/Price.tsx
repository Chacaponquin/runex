interface Props {
  price: string;
}

export default function Price({ price }: Props) {
  return (
    <span className="text-base font-fontMedium text-blue-500">{price}</span>
  );
}
