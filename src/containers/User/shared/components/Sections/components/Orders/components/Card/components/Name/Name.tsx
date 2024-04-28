interface Props {
  name: string;
}

export default function Name({ name }: Props) {
  return <h1 className="font-fontMedium text-xl mb-0.5">{name}</h1>;
}
