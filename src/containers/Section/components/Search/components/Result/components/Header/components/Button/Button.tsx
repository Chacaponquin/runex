import { Filter } from "@modules/app/modules/icon/components";

interface Props {
  handleClick(): void;
}

export default function Button({ handleClick }: Props) {
  return (
    <button
      className="flex items-center gap-x-3 rounded-full stroke-black border-[2px] border-gray-200 px-6 py-2.5"
      onClick={handleClick}
    >
      <Filter size={22} />

      <p className="text-base">Filters</p>
    </button>
  );
}
