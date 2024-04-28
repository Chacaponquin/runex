import { Product } from "@modules/product/domain";
import { OrderProduct } from "./OrderProduct";
import moment from "moment";
import "moment/locale/es"; // without this line it didn't work

interface Props {
  id: string;
  amount: number;
  date: Date;
  products: OrderProduct[];
  no: number;
  note: string;
}

export class UserOrder {
  readonly id: string;
  readonly amount: number;
  readonly date: Date;
  readonly products: OrderProduct[];
  readonly no: number;
  readonly note: string;

  readonly discount = 0;
  readonly shipping = 0;
  readonly subTotal: number;

  constructor({ amount, date, id, products, no, note }: Props) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.products = products;
    this.no = no;
    this.note = note;
    this.subTotal = amount;
  }

  get amountStr() {
    return Product.str(this.amount);
  }

  get discountStr() {
    return Product.str(this.discount);
  }

  get subTotalStr() {
    return Product.str(this.subTotal);
  }

  get shippingStr() {
    return Product.str(this.shipping);
  }

  get name() {
    return `Pedido #${this.no}`;
  }

  get dateStr() {
    const str = moment(this.date)
      .locale("es")
      .format("MMMM Do YYYY, h:mm:ss a");

    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
