import { useBlockScroll } from "@modules/shared/hooks";
import clsx from "clsx";

interface Props {
  handleClose(): void;
}

export default function Filters({ handleClose }: Props) {
  const CLASS = clsx(
    "flex justify-center items-center",
    "p-4",
    "fixed top-0 left-0",
    "h-screen w-full",
    "bg-black/50",
    "z-50"
  );

  useBlockScroll(true);

  return (
    <div className={CLASS} onClick={handleClose}>
      <div className="bg-white rounded px-10 py-4"></div>
    </div>
  );
}
