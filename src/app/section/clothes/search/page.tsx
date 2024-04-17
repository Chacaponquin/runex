import { SearchClothe } from "@containers/Search/components";
import { SearchClotheParams } from "@modules/product/interfaces/params";

interface Props {
  searchParams: SearchClotheParams;
}

export default function Page(params: Props) {
  return <SearchClothe params={params.searchParams} />;
}
