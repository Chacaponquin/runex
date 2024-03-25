import { MultiSelect } from "@modules/app/modules/form/components";
import { useColors } from "./hooks";
import { Color } from "./components";

interface Props {
  handleAddColor(c: string): void;
  handleDeleteColor(c: string): void;
  colors: Array<string>;
}

export default function Colors({
  handleAddColor,
  handleDeleteColor,
  colors,
}: Props) {
  const { colorOptions, handleAdd, handleDelete } = useColors({
    handleAddColor,
    handleDeleteColor,
  });

  return (
    <MultiSelect
      options={colorOptions}
      handleDelete={handleDelete}
      handleSelect={handleAdd}
      id="product-color-select"
      placeholder="Colors"
      render={Color}
      selected={colors}
      valueKey="name"
    />
  );
}
