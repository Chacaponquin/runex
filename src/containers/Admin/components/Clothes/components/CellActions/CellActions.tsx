import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleDelete(): void;
  handleEdit(): void;
}

export default function CellActions({ handleDelete, handleEdit }: Props) {
  return (
    <div className="flex gap-x-3">
      <Button
        color="danger"
        disabled={false}
        rounded="full"
        size="sm"
        text="Borrar"
        handleClick={handleDelete}
      />

      <Button
        handleClick={handleEdit}
        color="primary"
        disabled={false}
        rounded="full"
        size="sm"
        text="Editar"
      />
    </div>
  );
}
