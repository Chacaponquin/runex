interface Props {
  id: string;
  name: string;
  price: number;
  images: Array<string>;
}

export class Product {
  private _id: string;
  private _name: string;
  private _price: number;
  private _images: Array<string>;
  private _provider: string;
  private _sizes: Array<string> = [];
  private _colors: Array<string> = [];

  constructor({ id, name, price, images }: Props) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._images = images;
    this._provider = "Amazon";
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get image() {
    return this._images[0];
  }

  get images() {
    return this._images;
  }

  get priceStr() {
    return Product.str(this.price);
  }

  get colors() {
    return this._colors;
  }

  get sizes() {
    return this._sizes;
  }

  get provider() {
    return this._provider;
  }

  static str(value: number): string {
    return `$${value}`;
  }
}
