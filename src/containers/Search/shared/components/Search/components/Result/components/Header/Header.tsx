import { useContext } from "react";
import { Button } from "./components";
import { SearchContext } from "@containers/Search/contexts";

interface Props {
  length: number;
}

export default function Header({ length }: Props) {
  const { handleOpenFilters } = useContext(SearchContext);

  return (
    <section className="mb-5 esm:mb-3 w-full flex sm:justify-between justify-end items-center">
      <h2 className="text-lg text-gray-600 sm:block hidden">
        Mostrando:{" "}
        <span className="text-black text-xl">{length} productos</span>
      </h2>

      <Button handleClick={handleOpenFilters} />
    </section>
  );
}
