import { Button } from "./components";

interface Props {
  length: number;
  handleChangeOpenFilters(): void;
}

export default function Header({ length, handleChangeOpenFilters }: Props) {
  return (
    <section className="mb-5 w-full flex justify-between items-center">
      <h2 className="text-lg text-gray-600">
        Showing: <span className="text-black text-xl">{length} products</span>
      </h2>

      <Button handleClick={handleChangeOpenFilters} />
    </section>
  );
}
