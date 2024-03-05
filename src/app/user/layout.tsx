import { User } from "@containers";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <User>{children}</User>;
}
