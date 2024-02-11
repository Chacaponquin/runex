import { ArrowRight } from "@modules/app/modules/icon/components";

interface Props {
  open: boolean;
}

export default function Arrow({ open }: Props) {
  return (
    <button
      style={{
        transform: open ? `rotate(90deg)` : `rotate(0deg)`,
      }}
      className="transition-all duration-200"
    >
      <ArrowRight size={24} />
    </button>
  );
}
