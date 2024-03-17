import { ProductColor } from "../domain";

interface BuildProductLinkProps {
  id: string;
  type: "clothe" | "medicine";
}

export default function useProduct() {
  const colors: Array<ProductColor> = [
    { name: "Orange", color: "#f0932b" },
    { color: "#6ab04c", name: "Green" },
    { name: "Red", color: "#eb4d4b" },
    { name: "Black", color: "#2d3436" },
  ];

  function buildProductLink({ type, id }: BuildProductLinkProps) {
    return `https://runess.com/${type}/p=${id}`;
  }

  function buildProductInstagramLink(props: BuildProductLinkProps): string {
    return buildProductLink(props);
  }

  function buildProductFacebookLink(props: BuildProductLinkProps): string {
    return buildProductLink(props);
  }

  function buildProductTwitterLink(props: BuildProductLinkProps): string {
    return buildProductLink(props);
  }

  return {
    colors,
    buildProductLink,
    buildProductInstagramLink,
    buildProductFacebookLink,
    buildProductTwitterLink,
  };
}
