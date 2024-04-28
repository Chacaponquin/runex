import { Modal } from "@modules/app/components";
import clsx from "clsx";
import { Buttons, Footer, Header, Products } from "./components";
import { UserOrder } from "@modules/order/domain";

interface Props {
  open: UserOrder | null;
  handleClose(): void;
}

export default function OrderModal({ handleClose, open }: Props) {
  const CLASS = clsx(
    "bg-white",
    "sm:px-8 px-5 py-6",
    "rounded",
    "w-full max-w-[1000px]",
    "overflow-y-auto",
    "h-max max-h-full"
  );

  return (
    <Modal handleClose={handleClose} open={open ? true : false} align="center">
      {open && (
        <div className={CLASS} onClick={(e) => e.stopPropagation()}>
          <Header name={open.name} date={open.dateStr} />
          <Products products={open.products} />
          <Footer
            note={open.note}
            discount={open.discountStr}
            shipping={open.shippingStr}
            subTotal={open.subTotalStr}
            total={open.amountStr}
          />
          <Buttons handleClose={handleClose} />
        </div>
      )}
    </Modal>
  );
}
