import { SelectProductProvider } from "@modules/product/contexts";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <SelectProductProvider>{children}</SelectProductProvider>;
}
