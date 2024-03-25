import { Menu as MenuIcon } from "@modules/app/modules/icon/components";

interface Props {
  handleClick(): void;
}

export default function Menu({ handleClick }: Props) {
  return (
    <button className="stroke-black lg:hidden" onClick={handleClick}>
      <MenuIcon size={20} />
    </button>
  );
}
