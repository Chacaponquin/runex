interface Props {
  title: string;
  content: string;
}

export default function InfoCard({ title, content }: Props) {
  return (
    <div className="flex flex-col">
      <p className="mb-0.5 text-sm text-gray-500 font-fontMedium">{title}</p>

      <span className="text-base font-fontMedium">{content}</span>
    </div>
  );
}
