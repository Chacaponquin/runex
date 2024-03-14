import { Th } from "./components";

interface Props {
  columns: Array<string>;
}

export default function Head({ columns }: Props) {
  return (
    <thead className="bg-gray-50">
      <tr className="">
        {columns.map((c, index) => (
          <Th key={index} text={c} isFirst={index === 0} />
        ))}
      </tr>
    </thead>
  );
}
