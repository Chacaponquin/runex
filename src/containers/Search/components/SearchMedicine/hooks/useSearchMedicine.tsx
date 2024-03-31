import { SearchFilterFunctionProps } from "@containers/Search/interfaces";
import { useMedicineServices } from "@modules/product/services";

export default function useSearchMedicine() {
  const { filter } = useMedicineServices();

  function filterFunction(props: SearchFilterFunctionProps) {
    filter({
      ...props,
      body: {
        maxPrice: props.body.maxPrice,
        minPrice: props.body.minPrice,
        name: props.body.name,
        page: props.body.page,
        provider: props.body.provider,
      },
    });
  }

  return { filterFunction };
}
