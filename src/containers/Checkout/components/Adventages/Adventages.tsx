import { Adventage } from "@containers/Checkout/interfaces";
import { Card } from "./components";

interface Props {
  adventages: Array<Adventage>;
}

export default function Adventages({ adventages }: Props) {
  return (
    <section className="grid grid-cols-2 esm:grid-cols-1 w-full gap-x-7 gap-y-7 mt-10 mb-6 esm:mt-6">
      {adventages.map((a, index) => (
        <Card
          key={index}
          icon={a.icon}
          description={a.description}
          title={a.title}
        />
      ))}
    </section>
  );
}
