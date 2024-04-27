import { IconProps } from "@modules/app/modules/icon/interfaces";
import Link from "next/link";
import Button from "../Button/Button";

interface Props {
  link: string;
  text: string;
  icon: React.FC<IconProps>;
}

export default function LinkButton({ icon, link, text }: Props) {
  return (
    <Link href={link}>
      <Button text={text} icon={icon} />
    </Link>
  );
}
