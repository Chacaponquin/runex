import { IconProps } from "@modules/app/modules/icon/interfaces";

interface Props {
  title: string;
  icon: React.FC<IconProps>;
  description: string;
}

export default function Card({ description, icon, title }: Props) {
  return (
    <article className="flex flex-col items-start stroke-black">
      <i className="mb-2">{icon({ size: 32 })}</i>

      <h2 className="font-fontMedium text-lg mb-0.5">{title}</h2>

      <p className="text-sm leading-7 text-gray-500">{description}</p>
    </article>
  );
}
