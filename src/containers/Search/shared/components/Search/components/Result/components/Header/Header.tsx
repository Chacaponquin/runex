import { useContext } from "react";
import { Button } from "./components";
import { SearchContext } from "@containers/Search/contexts";

interface Props {
  length: number;
}

export default function Header({ length }: Props) {
  const { handleOpenFilters } = useContext(SearchContext);

  return (
    <section className="mb-5 esm:mb-3 w-full flex justify-between items-center">
      <h2 className="text-lg text-gray-600">
        Showing: <span className="text-black text-xl">{length} products</span>
      </h2>

      <Button handleClick={handleOpenFilters} />
    </section>
  );
}
