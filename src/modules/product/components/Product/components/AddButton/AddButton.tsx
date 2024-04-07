import clsx from "clsx";

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
    "px-3 py-1.5",
    "stroke-white",
    "text-white",
    "rounded-sm",
    "transition-all duration-300",
    "hover:opacity-70",
    "gap-x-2.5",

    { "bg-blue-500": !isInCart, "bg-red-400": isInCart }
  );

  function handleClick() {
    if (isInCart) {
      handleDelete();
    } else {
      handleAdd();
    }
  }

  return (
    <button
      className={CLASS}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      {!isInCart ? (
        <p className="font-fontMedium text-base">Añadir</p>
      ) : (
        <p className="font-fontMedium">Eliminar</p>
      )}
    </button>
  );
}
