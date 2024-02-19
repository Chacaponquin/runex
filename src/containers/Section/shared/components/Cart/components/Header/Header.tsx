import clsx from "clsx";
import { Back } from "./components";

interface Props {
  full: boolean;
  handleChangeOpenCart(): void;
}

export default function Header({ full, handleChangeOpenCart }: Props) {
  const CLASS = clsx("mb-2", "grid items-center", "py-3", {
    "grid-cols-1": !full,
    "grid-cols-3": full,
  });

  return (
    <header className={CLASS}>
      {full && <Back handleClick={handleChangeOpenCart} />}
      <h1 className="font-fontSemiBold text-2xl text-center">My Cart</h1>
      {full && <div />}
    </header>
  );
}
