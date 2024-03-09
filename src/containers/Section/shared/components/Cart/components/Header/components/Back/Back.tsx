import { ArrowRight } from "@modules/app/modules/icon/components";

interface Props {
  handleClick(): void;
}

export default function Back({ handleClick }: Props) {
  return (
    <div className="flex justify-end items-center">
      <button onClick={handleClick} className="fill-black">
        <ArrowRight size={24} />
      </button>
    </div>
  );
}
