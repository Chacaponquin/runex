interface Props {
  price: string;
}

export default function Price({ price }: Props) {
  return <span className="font-fontMedium text-2xl esm:text-xl">{price}</span>;
}
