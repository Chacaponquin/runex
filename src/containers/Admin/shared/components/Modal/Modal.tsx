import { useModal } from "@containers/Admin/hooks";
import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  useBlockScroll(true);

  const { handleClose } = useModal();

  const CLASS = clsx(
    "fixed top-0 left-0",
    "flex items-center justify-center",
    "h-screen w-full",
    "bg-black/50"
  );

  return (
    <div className={CLASS} onClick={handleClose}>
      <form
        action=""
        onClick={(e) => e.stopPropagation()}
        className={clsx("bg-white", "px-5 py-3", "rounded")}
      >
        {children}
      </form>
    </div>
  );
}
