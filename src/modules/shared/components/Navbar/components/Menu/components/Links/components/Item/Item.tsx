import Link from "next/link";

interface Props {
  url: string;
  name: string;
}

export default function Item({ name, url }: Props) {
  return (
    <Link href={url}>
      <li>
        <h3 className="font-fontMedium">{name}</h3>
      </li>
    </Link>
  );
}
