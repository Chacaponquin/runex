import { Close } from "@modules/app/modules/icon/components";

interface Props {
  handleClose(): void;
}

export default function Header({ handleClose }: Props) {
  return (
    <header className="flex justify-end pt-4 mb-2">
      <button className="stroke-black" onClick={handleClose}>
        <Close size={18} />
      </button>
    </header>
  );
}
