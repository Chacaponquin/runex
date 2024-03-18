import clsx from "clsx";
import { Back } from "./components";

interface Props {
  handleChangeOpenCart(): void;
}

export default function Header({ handleChangeOpenCart }: Props) {
  const CLASS = clsx(
    "relative",
    "mb-2",
    "flex justify-center items-center",
    "py-3"
  );

  return (
    <header className={CLASS}>
      <h1 className="font-fontSemiBold text-2xl text-center">Mi carrito</h1>
      <Back handleClick={handleChangeOpenCart} />
    </header>
  );
}
