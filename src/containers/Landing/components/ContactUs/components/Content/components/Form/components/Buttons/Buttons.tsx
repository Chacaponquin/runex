import { Button } from "@modules/app/modules/ui/components";
import { Completed } from "./components";

interface Props {
  loading: boolean;
  completed: boolean;
}

export default function Buttons({ loading, completed }: Props) {
  return (
    <div className="flex justify-end">
      {completed ? (
        <Completed />
      ) : (
        <Button
          text="Enviar"
          disabled={loading}
          color="primary"
          size="lg"
          rounded="sm"
          type="submit"
        />
      )}
    </div>
  );
}
