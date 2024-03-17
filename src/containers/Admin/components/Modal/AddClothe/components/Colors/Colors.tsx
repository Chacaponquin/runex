import { MultiSelect } from "@modules/app/modules/form/components";
import { useColors } from "./hooks";
import { Color } from "./components";

interface Props {
  handleAddColor(c: string): void;
  handleDeleteColor(c: string): void;
}

export default function Colors({ handleAddColor, handleDeleteColor }: Props) {
  const { colors, handleAdd, handleDelete } = useColors({
    handleAddColor,
    handleDeleteColor,
  });

  return (
    <MultiSelect
      options={colors}
      handleDelete={handleDelete}
      handleSelect={handleAdd}
      id="product-color-select"
      placeholder="Colors"
      render={Color}
    />
  );
}
