interface Props {
  handleDelete(): void;
}

export default function Actions({ handleDelete }: Props) {
  return (
    <td className="text-center">
      <button
        onClick={handleDelete}
        className="text-light-gray-400 text-base esm:text-sm hover:underline hover:underline-offset-4"
      >
        Eliminar
      </button>
    </td>
  );
}
