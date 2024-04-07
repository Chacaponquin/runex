import { SearchClothe } from "@containers/Search/components";
import { SearchClotheParams } from "@containers/Search/components/SearchClothe/interfaces";

interface Props {
  searchParams: SearchClotheParams;
}

export default function Page(params: Props) {
  return <SearchClothe params={params.searchParams} />;
}
