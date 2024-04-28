interface Props {
  date: string;
}

export default function Date({ date }: Props) {
  return <h2 className="text-base text-gray-500 font-fontMedium">{date}</h2>;
}
