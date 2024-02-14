interface Props {
  title: string;
  value: string;
}

export default function Info({ title, value }: Props) {
  return (
    <div className="flex justify-between w-ful mb-1.5">
      <h3 className="font-fontSemiBold text-gray-500 text-base">{title}</h3>
      <span className="text-base font-fontMedium">{value}</span>
    </div>
  );
}
