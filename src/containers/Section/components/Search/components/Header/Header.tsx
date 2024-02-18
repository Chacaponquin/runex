import { Description, Search, Title } from "./components";

interface Props {
  handleApplySearch(): void;
  search: string;
  handleChangeSearch(v: string): void;
}

export default function Header({
  handleApplySearch,
  search,
  handleChangeSearch,
}: Props) {
  return (
    <header className="flex flex-col items-center pt-24 pb-10 w-full">
      <Title />
      <Description />
      <Search
        handleSearch={handleApplySearch}
        value={search}
        handleChangeSearch={handleChangeSearch}
      />
    </header>
  );
}
