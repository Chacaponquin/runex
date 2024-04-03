import clsx from "clsx";
import { useAside } from "./hooks";
import { Header, Section } from "./components";
import { useScreen } from "@modules/shared/hooks";
import { SCREEN_SIZES } from "@modules/app/constants";

interface Props {
  handleChangeOpenAside(): void;
  openAside: boolean;
}

export default function Aside({ handleChangeOpenAside, openAside }: Props) {
  const { condition } = useScreen(SCREEN_SIZES.LG);

  const { sections, active } = useAside();

  const CONTAINER_CLASS = clsx(
    "fixed top-0 left-0",
    "h-svh",

    { "py-3 pl-3": condition },

    { "w-full": !condition, "bg-black/50": !condition },

    { hidden: !openAside && !condition }
  );

  const CLASS = clsx(
    "flex flex-col",
    "h-full",
    "bg-white",
    "py-5 px-3",
    "shadow-lg",

    { rounded: condition }
  );

  return (
    <div className={CONTAINER_CLASS} onClick={handleChangeOpenAside}>
      <aside
        className={CLASS}
        style={{ width: condition ? "240px" : "270px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Header />

        <ul className="flex flex-col gap-y-3">
          {sections.map((s, index) => (
            <Section
              key={index}
              icon={s.icon}
              title={s.title}
              active={active === s.section}
              url={s.url}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
}
