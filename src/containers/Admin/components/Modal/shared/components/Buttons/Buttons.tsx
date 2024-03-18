import { useModal } from "@containers/Admin/hooks";
import { Button } from "@modules/app/modules/ui/components";

interface Props {
  loading: boolean;
}

export default function Buttons({ loading }: Props) {
  const { handleClose } = useModal();

  return (
    <section className="flex gap-x-4 items-center justify-end">
      <Button
        color="cancel"
        disabled={loading}
        handleClick={handleClose}
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
