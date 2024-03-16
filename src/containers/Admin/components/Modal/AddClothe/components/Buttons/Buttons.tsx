import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleCancel(): void;
}

export default function Buttons({ handleCancel }: Props) {
  return (
    <section className="flex gap-x-4 items-center justify-end">
      <Button
        color="cancel"
        disabled={false}
        handleClick={handleCancel}
        size="lg"
        text="Cancelar"
        rounded="full"
      />

      <Button
        color="primary"
        disabled={false}
        size="lg"
        text="Guardar"
        rounded="full"
        type="submit"
      />
    </section>
  );
}
