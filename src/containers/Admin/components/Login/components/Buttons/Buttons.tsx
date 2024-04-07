import { Button } from "@modules/app/modules/ui/components";

interface Props {
  loading: boolean;
}

export default function Buttons({ loading }: Props) {
  return (
    <section className="mt-2">
      <Button
        color="primary"
        size="lg"
        disabled={loading}
        rounded="sm"
        text="Acceder"
        type="submit"
        full={true}
      />
    </section>
  );
}
