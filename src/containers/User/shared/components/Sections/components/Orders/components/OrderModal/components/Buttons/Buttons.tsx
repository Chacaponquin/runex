import { Button } from "@modules/app/modules/ui/components";

interface Props {
  handleClose(): void;
}

export default function Buttons({ handleClose }: Props) {
  return (
    <section className="flex w-full justify-end mt-5">
      <Button
        color="primary"
        disabled={false}
        rounded="sm"
        size="lg"
        text="Cerrar"
        handleClick={handleClose}
      />
    </section>
  );
}
