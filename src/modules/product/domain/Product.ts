export interface Provider {
  name: string;
}

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  images: Array<string>;
}

export class Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly images: Array<string>;
  readonly provider: string;
  readonly sizes: Array<string> = ["S", "M", "L", "XL"];
  readonly colors: Array<string> = ["orange", "red", "green"];

  constructor({ id, name, price, images }: ProductProps) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.images = images.slice(0, 5);
    this.provider = "Amazon";
  }

  get image() {
    return this.images[0];
  }

  get priceStr() {
    return Product.str(this.price);
  }

  static str(value: number): string {
    return `$${value}`;
  }

  static hexColor(color: string): string {
    if (color === "orange") {
      return "#f0932b";
    } else if (color === "green") {
      return "#6ab04c";
    } else if (color === "red") {
      return "#eb4d4b";
    } else {
      return "#2d3436";
    }
  }
}
