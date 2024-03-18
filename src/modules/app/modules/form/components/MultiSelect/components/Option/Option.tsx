import clsx from "clsx";
import { Checkbox } from "../../../";

interface Props<T> {
  option: T;
  render: React.FC<T>;
  selected: boolean;
  handleSelect(): void;
  handleDelete(): void;
}

export default function Option<T>({
  option,
  render,
  selected,
  handleDelete,
  handleSelect,
}: Props<T>) {
  function handleChange(value: boolean) {
    if (value) {
      handleSelect();
    } else {
      handleDelete();
    }
  }

  const CLASS = clsx(
    "flex",
    "gap-x-4",
    "py-2 px-4",
    "cursor-pointer",
    "duration-300 transition-all",
    "hover:bg-gray-100",

    { "bg-gray-100": selected, "bg-white": !selected }
  );

  return (
    <div className={CLASS}>
      <Checkbox checked={selected} size="sm" onChange={handleChange} />
      {render(option)}
    </div>
  );
}
