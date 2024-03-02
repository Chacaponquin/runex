import { Button } from "./components";

interface Props {
  handleClose(): void;
}

export default function Buttons({ handleClose }: Props) {
  return (
    <section className="grid grid-cols-2 gap-x-3">
      <Button
        text="Cancelar"
        color="dark"
        handleClick={handleClose}
        type="button"
      />

      <Button text="Aplicar" color="light" type="submit" />
    </section>
  );
}
