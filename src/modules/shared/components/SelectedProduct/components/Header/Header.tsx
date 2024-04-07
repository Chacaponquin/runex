import { Close } from "@modules/app/modules/icon/components";
import { useSelectProduct } from "@modules/product/hooks";

export default function Header() {
  const { handleDeleteSelectedProduct } = useSelectProduct();

  return (
    <header className="w-full py-4 flex justify-end px-5">
      <button className="stroke-white" onClick={handleDeleteSelectedProduct}>
        <Close size={22} />
      </button>
    </header>
  );
}
