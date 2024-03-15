import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleOpenAddClothe(): void;
}

export default function Actions({ handleOpenAddClothe }: Props) {
  return (
    <div className="flex items-center">
      <Button
        handleClick={handleOpenAddClothe}
        text="Añadir"
        color="primary"
        disabled={false}
        size="sm"
      />
    </div>
  );
}
