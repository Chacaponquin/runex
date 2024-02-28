import { Provider } from "../domain";

interface BuildProductLinkProps {
  id: string;
  type: "clothe" | "medicine";
}

export default function useProduct() {
  const providers: Array<Provider> = [{ name: "Amazon" }, { name: "HyM" }];

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
    providers,
    buildProductLink,
    buildProductInstagramLink,
    buildProductFacebookLink,
    buildProductTwitterLink,
  };
}
