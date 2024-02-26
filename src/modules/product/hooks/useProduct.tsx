import { Provider } from "../domain";

export default function useProduct() {
  const providers: Array<Provider> = [{ name: "Amazon" }, { name: "HyM" }];

  return { providers };
}
