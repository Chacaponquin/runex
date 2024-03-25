import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleOpenAddClothe(): void;
}

export default function Actions({ handleOpenAddClothe }: Props) {
  return (
    <div className="flex items-center">
      <Button
        handleClick={handleOpenAddClothe}
        text="Añadir ropa"
        color="primary"
        disabled={false}
        size="sm"
        rounded="full"
      />
    </div>
  );
}
