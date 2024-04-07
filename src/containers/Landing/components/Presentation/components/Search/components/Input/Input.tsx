interface Props {
  handleFocus(): void;
  handleBlur(): void;
  id: string;
  value: string;
  handleChange(v: string): void;
}

export default function Input({
  handleBlur,
  handleFocus,
  id,
  handleChange,
  value,
}: Props) {
  return (
    <input
      type="text"
      id={id}
      name="search"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="outline-none text-lg esm:text-base w-full bg-transparent"
      placeholder="Buscar aquí"
    />
  );
}
