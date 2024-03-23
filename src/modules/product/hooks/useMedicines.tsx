import { ProductCategory, Provider } from "../domain";

export default function useMedicines() {
  const providers: Array<Provider> = [{ name: "Amazon" }, { name: "HyM" }];

  const categories: Array<ProductCategory> = [{ name: "Analgésico" }];

  return { providers, categories };
}
