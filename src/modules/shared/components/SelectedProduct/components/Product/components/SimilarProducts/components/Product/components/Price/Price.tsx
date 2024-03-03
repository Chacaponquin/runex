interface Props {
  price: string;
  provider: string;
}

export default function Price({ price, provider }: Props) {
  return (
    <div className="flex gap-x-4 items-center mt-1">
      <p className="text-lg font-fontMedium">{price}</p>
      <span className="text-base text-gray-500">{`(${provider})`}</span>
    </div>
  );
}
