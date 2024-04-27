import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleAdd(): void;
  handleDeleteAll(): void;
  deleteDisable: boolean;
}

export default function TableProductActions({
  deleteDisable,
  handleDeleteAll,
  handleAdd,
}: Props) {
  return (
    <div className="flex items-center gap-x-1.5">
      <Button
        handleClick={handleAdd}
        text="Añadir"
        color="primary"
        disabled={false}
        size="sm"
        rounded="sm"
      />

      <Button
        handleClick={handleDeleteAll}
        text="Borrar todos"
        color="danger"
        disabled={deleteDisable}
        size="sm"
        rounded="sm"
      />
    </div>
  );
}
