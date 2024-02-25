interface Props {
  handleFocus(): void;
  handleBlur(): void;
  id: string;
}

export default function Input({ handleBlur, handleFocus, id }: Props) {
  return (
    <input
      type="text"
      id={id}
      name="search"
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="outline-none text-lg w-full bg-transparent"
      placeholder="Buscar aquí"
    />
  );
}
