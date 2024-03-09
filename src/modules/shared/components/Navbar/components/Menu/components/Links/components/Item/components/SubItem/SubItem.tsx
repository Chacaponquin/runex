import Link from "next/link";

interface Props {
  url: string;
  text: string;
}

export default function SubItem({ text, url }: Props) {
  return (
    <Link href={url}>
      <li className="text-lg hover:underline hover:underline-offset-2">
        {text}
      </li>
    </Link>
  );
}
