interface Props {
  handleClick(): void;
}

export default function AddButton({ handleClick }: Props) {
  return (
    <button
      className="bg-gray-100 text-black text-sm px-3 py-1 rounded font-fontMedium"
      onClick={handleClick}
    >
      Add to bag
    </button>
  );
}
