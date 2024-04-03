import { Check } from "./components";

interface Props {
  handleChange(): void;
  remember: boolean;
}

export default function Remember({ handleChange, remember }: Props) {
  return (
    <div className="flex gap-x-3 items-center">
      <Check remember={remember} handleChange={handleChange} />
      <p>Recuérdame</p>
    </div>
  );
}
