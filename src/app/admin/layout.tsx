import { Admin } from "@containers";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <Admin>{children}</Admin>;
}
