import { Checkbox } from "@modules/app/modules/form/components";

interface Props {
  select: boolean;
  handleDelete(): void;
  handleSelect(): void;
  name: string;
}

export default function Option({
  select,
  handleDelete,
  handleSelect,
  name,
}: Props) {
  return (
    <div className="flex gap-4">
      <Checkbox
        checked={select}
        onChange={select ? handleDelete : handleSelect}
        size="lg"
      />

      <p className="text-base">{name}</p>
    </div>
  );
}
