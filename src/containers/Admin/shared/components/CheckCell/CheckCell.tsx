import { Checkbox } from "@modules/app/modules/form/components";

interface Props {
  selected: boolean;
  handleSelect(value: boolean): void;
}

export default function CheckCell({ handleSelect, selected }: Props) {
  return (
    <div>
      <Checkbox checked={selected} onChange={handleSelect} size="sm" />
    </div>
  );
}
