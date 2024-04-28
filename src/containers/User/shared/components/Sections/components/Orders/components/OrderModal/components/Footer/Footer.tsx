import { Note, Payment } from "./components";

interface Props {
  note: string;
  total: string;
  shipping: string;
  subTotal: string;
  discount: string;
}

export default function Footer({
  note,
  shipping,
  subTotal,
  total,
  discount,
}: Props) {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
      <Note note={note} />
      <Payment
        total={total}
        shipping={shipping}
        subTotal={subTotal}
        discount={discount}
      />
    </footer>
  );
}
