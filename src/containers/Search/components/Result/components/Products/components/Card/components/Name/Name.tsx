interface Props {
  name: string;
}

export default function Name({ name }: Props) {
  return <h2 className="font-fontMedium text-lg mb-1">{name}</h2>;
}
