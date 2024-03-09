import Link from "next/link";

interface Props {
  title: string;
  url: string;
}

export default function Title({ title, url }: Props) {
  return (
    <Link href={url}>
      <h3 className="font-fontMedium mb-1 text-xl uppercase hover:text-blue-500">
        {title}
      </h3>
    </Link>
  );
}
