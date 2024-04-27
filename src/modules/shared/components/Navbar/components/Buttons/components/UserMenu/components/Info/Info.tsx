interface Props {
  email: string;
  first: string;
  last: string;
}

export default function Info({ email, first, last }: Props) {
  return (
    <div className="flex flex-col w-full px-5 py-2.5">
      <h2 className="text-lg font-fontMedium">
        {first} {last}
      </h2>

      <h3 className="text-base">{email}</h3>
    </div>
  );
}
