import { Description, Search, Title } from "./components";

interface Props {
  handleApplySearch(): void;
  search: string;
  handleChangeSearch(v: string): void;
  product: string
}

export default function Header({
  handleApplySearch,
  search,
  handleChangeSearch,
  product
}: Props) {
  return (
    <header className="flex flex-col items-center lg:pt-24 pt-20 esm:pt-14 pb-10 w-full px-3">
      <Title product={product} />
      <Description />
      <Search
        handleSearch={handleApplySearch}
        value={search}
        handleChangeSearch={handleChangeSearch}
      />
    </header>
  );
}
