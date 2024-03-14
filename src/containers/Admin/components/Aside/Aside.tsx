import clsx from "clsx";
import { useAside } from "./hooks";
import { Header, Section } from "./components";

export default function Aside() {
  const { sections, active } = useAside();

  const CLASS = clsx(
    "flex flex-col",
    "max-w-[300px] w-full h-screen",
    "bg-white",
    "py-5 px-6"
  );

  return (
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
  );
}
