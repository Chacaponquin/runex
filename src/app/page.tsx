import { UserProvider } from "@modules/user/context";
import { Landing } from "@containers";

export default function Page() {
  return (
    <UserProvider>
      <Landing />
    </UserProvider>
  );
}
