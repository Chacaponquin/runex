import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleDelete(): void;
  handleEdit(): void;
}

export default function CellActions({ handleDelete, handleEdit }: Props) {
  return (
    <div className="flex gap-x-2">
      <Button
        handleClick={handleEdit}
        color="primary"
        disabled={false}
        rounded="sm"
        size="sm"
        text="Editar"
      />

      <Button
        color="danger"
        disabled={false}
        rounded="sm"
        size="sm"
        text="Borrar"
        handleClick={handleDelete}
      />
    </div>
  );
}
