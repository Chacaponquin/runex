import { ArrowLeft } from "@modules/app/modules/icon/components";

interface Props {
  handleClick(): void;
}

export default function Back({ handleClick }: Props) {
  return (
    <button onClick={handleClick} className="fill-black">
      <ArrowLeft size={24} />
    </button>
  );
}
