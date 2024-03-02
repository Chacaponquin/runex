import { NavbarLink } from "@modules/shared/components/Navbar/interfaces";
import { Item } from "./components";

interface Props {
  links: Array<NavbarLink>;
}

export default function Links({ links }: Props) {
  return (
    <ul className="flex flex-col w-full gap-y-3">
      {links.map((l, index) => (
        <Item key={index} url={l.url} name={l.label} />
      ))}
    </ul>
  );
}
