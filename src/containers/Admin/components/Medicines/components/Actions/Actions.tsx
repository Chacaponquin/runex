import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleAdd(): void;
}

export default function Actions({ handleAdd }: Props) {
  return (
    <div className="flex items-center">
      <Button
        handleClick={handleAdd}
        text="Añadir medicina"
        color="primary"
        disabled={false}
        size="sm"
        rounded="full"
      />
    </div>
  );
}
