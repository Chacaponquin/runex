import { Close } from "@modules/app/modules/icon/components";

interface Props {
  handleDeleteSelectedProduct(): void;
}

export default function Header({ handleDeleteSelectedProduct }: Props) {
  return (
    <header className="w-full py-4 flex justify-end px-5">
      <button className="stroke-white" onClick={handleDeleteSelectedProduct}>
        <Close size={24} />
      </button>
    </header>
  );
}
