import { Logo } from "@modules/app/components";

export default function Header() {
  return (
    <header className="mb-5 flex gap-x-4 items-center px-5">
      <Logo size={30} />
      <h1 className="text-base font-fontMedium">Runess</h1>
    </header>
  );
}
