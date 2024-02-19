interface Props {
  handleClick(): void;
}

export default function AddButton({ handleClick }: Props) {
  return (
    <button
      className="px-4 py-1 text-black text-base bg-gray-100 rounded font-fontMedium"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      Add to bag
    </button>
  );
}
