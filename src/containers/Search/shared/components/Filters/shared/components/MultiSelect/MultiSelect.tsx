import { v4 as uuid } from "uuid";
import { Loading, Option } from "./components";

interface Props {
  options: Array<string>;
  selected: Array<string>;
  handleSelect(o: string): void;
  handleDelete(o: string): void;
  loading: boolean;
}

export default function MultiSelect({
  options: ioptions,
  selected,
  handleDelete,
  handleSelect,
  loading,
}: Props) {
  const options = ioptions.map((o) => {
    return { id: uuid(), name: o };
  });

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-x-4 gap-y-2">
      {!loading &&
        options.map((o) => (
          <Option
            key={o.name}
            select={selected.includes(o.name)}
            name={o.name}
            handleDelete={() => handleDelete(o.name)}
            handleSelect={() => handleSelect(o.name)}
          />
        ))}

      {loading && <Loading />}
    </div>
  );
}
