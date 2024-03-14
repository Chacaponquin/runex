import { Bag } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { Fragment } from "react";

interface Props {
  handleAdd(): void;
  isInCart: boolean;
  handleDelete(): void;
}

export default function AddButton({
  handleAdd,
  isInCart,
  handleDelete,
}: Props) {
  const CLASS = clsx(
    "flex items-center justify-center",
    "bg-blue-500",
    "px-3 py-2",
    "text-sm",
    "stroke-white",
    "text-white",
    "rounded",
    "transition-all duration-300",
    "hover:opacity-70",
    "gap-x-2.5"
  );

  return (
    <button className={CLASS} onClick={isInCart ? handleDelete : handleAdd}>
      {!isInCart ? (
        <Fragment>
          <Bag size={20} />
          <p className="font-fontMedium">Añadir</p>
        </Fragment>
      ) : (
        <p className="font-fontMedium">Eliminar</p>
      )}
    </button>
  );
}
