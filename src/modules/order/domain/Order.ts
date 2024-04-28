interface Props {
  id: string;
  amount: number;
  date: Date;
  client: string;
  completed: boolean;
  paymentType: string;
}

export class Order {
  readonly id: string;
  readonly amount: number;
  readonly date: Date;
  readonly client: string;
  readonly completed: boolean;
  readonly paymentType: string;

  constructor({ amount, date, id, client, completed, paymentType }: Props) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.client = client;
    this.completed = completed;
    this.paymentType = paymentType;
  }
}
