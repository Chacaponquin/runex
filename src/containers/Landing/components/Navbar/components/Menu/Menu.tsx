import { Menu as MenuIcon } from "@modules/app/modules/icon/components";

export default function Menu() {
  return (
    <section className="flex xl:hidden items-center stroke-black justify-end">
      <button>
        <MenuIcon size={24} />
      </button>
    </section>
  );
}
