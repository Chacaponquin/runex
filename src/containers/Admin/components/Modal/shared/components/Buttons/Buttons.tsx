import { useModal } from "@containers/Admin/hooks";
import { Button } from "@modules/app/modules/ui/components";

interface Props {
  loading: boolean;
}

export default function Buttons({ loading }: Props) {
  const { handleClose } = useModal();

  return (
    <section className="flex gap-x-2.5 items-center justify-end">
      <Button
        color="cancel"
        disabled={loading}
        handleClick={handleClose}
        size="lg"
        text="Cancelar"
        rounded="sm"
      />

      <Button
        color="primary"
        disabled={loading}
        size="lg"
        text="Guardar"
        rounded="sm"
        type="submit"
      />
    </section>
  );
}
