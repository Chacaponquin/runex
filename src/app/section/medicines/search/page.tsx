import { SearchMedicine } from "@containers/Search/components";
import { SearchMedicineParams } from "@containers/Search/components/SearchMedicine/interfaces";

interface Props {
  searchParams: SearchMedicineParams;
}

export default function Page(params: Props) {
  return <SearchMedicine params={params.searchParams} />;
}
