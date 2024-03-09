import { NavbarSubLink } from "@modules/shared/components/Navbar/interfaces";
import { SubItem, Title } from "./components";

interface Props {
  url: string;
  name: string;
  subs: Array<NavbarSubLink>;
}

export default function Item({ name, url, subs }: Props) {
  return (
    <li className="flex flex-col">
      <Title title={name} url={url}/>
      

      <ul className="flex flex-col gap-y-1">
        {subs.map((s, index) => (
          <SubItem key={index} text={s.label} url={s.url} />
        ))}
      </ul>
    </li>
  );
}
