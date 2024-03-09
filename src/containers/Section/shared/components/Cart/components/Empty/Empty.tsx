import { SCREEN_SIZES } from "@modules/app/constants";
import { Button } from "@modules/app/modules/form/components";
import { Bag } from "@modules/app/modules/icon/components";
import { useScreen } from "@modules/shared/hooks";

interface Props {
  handleClose(): void;
}

export default function Empty({ handleClose }: Props) {
  const { bigScreen } = useScreen(SCREEN_SIZES.ESM);

  return (
    <div className="flex w-full flex-col items-center py-16">
      <i className="stroke-black mb-6 esm:mb-5">
        <Bag size={bigScreen ? 60 : 48} />
      </i>

      <h1 className="font-fontSemiBold text-3xl esm:text-2xl text-center mb-6">
        Tu carrito está vacío
      </h1>

      <Button
        handleClick={handleClose}
        id="close-button"
        rounded="full"
        size="xl"
        text="Continuar"
      />
    </div>
  );
}
