export interface RespOrderDTO {
  id: string;
  amount: number;
}

export interface RespUserOrderProductDTO {
  name: string;
  provider: string;
  id: string;
  price: number;
  image: string;
  quantity: number;
}

export interface RespUserOrderDTO {
  id: string;
  amount: number;
  date: string;
  products: RespUserOrderProductDTO[];
  no: number;
  note: string;
}
