import { Admin } from "@containers";
import { AdminUserProvider } from "@modules/user/context";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <AdminUserProvider>
      <Admin>{children}</Admin>
    </AdminUserProvider>
  );
}
