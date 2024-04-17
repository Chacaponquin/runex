import { useContext } from "react";
import { Button } from "./components";
import { SearchContext } from "@containers/Search/contexts";

export default function Buttons() {
  const { handleCloseFilters } = useContext(SearchContext);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
      <Button text="Aplicar" color="light" type="submit" />

      <Button
        text="Cancelar"
        color="dark"
        handleClick={handleCloseFilters}
        type="button"
      />
    </section>
  );
}
