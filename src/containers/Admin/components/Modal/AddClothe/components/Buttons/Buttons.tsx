import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleCancel(): void;
  loading: boolean;
}

export default function Buttons({ handleCancel, loading }: Props) {
  return (
    <section className="flex gap-x-4 items-center justify-end">
      <Button
        color="cancel"
        disabled={loading}
        handleClick={handleCancel}
        size="xl"
        text="Cancelar"
        rounded="full"
      />

      <Button
        color="primary"
        disabled={loading}
        size="xl"
        text="Guardar"
        rounded="full"
        type="submit"
      />
    </section>
  );
}
