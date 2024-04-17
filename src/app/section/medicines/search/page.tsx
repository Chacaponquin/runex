import { SearchMedicine } from "@containers/Search/components";
import { SearchMedicineParams } from "@modules/product/interfaces/params";

interface Props {
  searchParams: SearchMedicineParams;
}

export default function Page(params: Props) {
  return <SearchMedicine params={params.searchParams} />;
}
