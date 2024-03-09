interface Props {
  price: string;
}

export default function Price({ price }: Props) {
  return <span className="text-blue-500 font-fontMedium text-sm">{price}</span>;
}
