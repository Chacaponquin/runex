import { USER_SECTIONS } from "@containers/User/constants";
import { Sections } from "@containers/User/shared/components";

export default function Page() {
  return <Sections activeSection={USER_SECTIONS.ORDERS} />;
}
