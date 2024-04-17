import { useContext } from "react";
import { Button } from "./components";
import { SearchContext } from "@containers/Search/contexts";
import { ContentLoader } from "@modules/shared/components";

interface Props {
  length: number;
  loading: boolean;
}

export default function Header({ length, loading }: Props) {
  const { handleOpenFilters } = useContext(SearchContext);

  return (
    <section className="mb-5 esm:mb-3 w-full flex sm:justify-between justify-end items-center">
      <div className="items-center sm:flex hidden gap-x-2">
        <h2 className="text-lg text-gray-600">Mostrando:</h2>

        {loading && <ContentLoader height={30} width={110} />}

        {!loading && (
          <span className="text-black text-xl">{length} productos</span>
        )}
      </div>

      <Button handleClick={handleOpenFilters} />
    </section>
  );
}
