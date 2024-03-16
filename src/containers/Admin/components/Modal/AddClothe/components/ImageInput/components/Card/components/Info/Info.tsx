import { Close } from "@modules/app/modules/icon/components";

interface Props {
  handleDelete(): void;
  size: number;
}

export default function Info({ handleDelete, size }: Props) {
  const showSize = (size / 1024 / 1024).toFixed(2);

  return (
    <div className="flex gap-x-3">
      <span>{`${showSize} MB`}</span>

      <button type="button" className="stroke-gray-400" onClick={handleDelete}>
        <Close size={16} />
      </button>
    </div>
  );
}
