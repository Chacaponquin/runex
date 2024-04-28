import { useBlockScroll } from "@modules/shared/hooks";
import { NavbarLink } from "../../interfaces";
import { Footer, Header, Links } from "./components";

interface Props {
  openMenu: boolean;
  handleCloseSide(): void;
  links: NavbarLink[];
}

export default function Menu({ openMenu, handleCloseSide, links }: Props) {
  useBlockScroll(openMenu);

  return (
    <div
      className="fixed lg:hidden top-0 left-0 w-full h-screen z-40 bg-black/50 flex flex-col"
      style={{ visibility: openMenu ? "visible" : "hidden" }}
      onClick={handleCloseSide}
    >
      <aside
        className="flex flex-col px-6 bg-white h-full w-[330px]"
        onClick={(e) => e.stopPropagation()}
      >
        <Header handleClose={handleCloseSide} />
        <Links links={links} />
        <Footer />
      </aside>
    </div>
  );
}
