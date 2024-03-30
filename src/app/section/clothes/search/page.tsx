import { Search } from "@containers";
import { UrlSearchParams } from "@containers/Search/interfaces";

interface Props {
  searchParams: UrlSearchParams;
}

export default function Page(params: Props) {
  return <Search {...params.searchParams} />;
}
