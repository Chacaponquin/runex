import clsx from "clsx";
import { useAside } from "./hooks";
import { Header, Section } from "./components";

export default function Aside() {
  const { sections, active } = useAside();

  const CLASS = clsx(
    "flex flex-col",
    "w-[240px] h-full",
    "bg-white",
    "py-5 px-3",
    "shadow-lg",
    "rounded-xl"
  );

  return (
    <div className="h-svh">
      <aside className={CLASS}>
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
