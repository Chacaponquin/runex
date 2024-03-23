export interface ProductProps {
  id: string;
  name: string;
  price: number;
  images: Array<string>;
  category: string;
}

export class Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly images: Array<string>;
  readonly provider: string;
  readonly category: string;

  constructor({ id, name, price, images, category }: ProductProps) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.images = images.slice(0, 5);
    this.provider = "Amazon";
    this.category = category;
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

export interface ProductImage {
  name: string;
  size: number;
  source: string;
}
