import { Resize } from "@containers/Information/shared/components";

interface Props {
  header: string;
}

export default function Header({ header }: Props) {
  return (
    <header className="flex justify-center bg-blue-500">
      <Resize className="py-20 pb-40">
        <h1 className="text-7xl text-white">{header}</h1>
      </Resize>
    </header>
  );
}
