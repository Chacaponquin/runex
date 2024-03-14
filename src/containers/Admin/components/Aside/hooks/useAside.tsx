import { Bag, Clothe } from "@modules/app/modules/icon/components";
import { AsideSection } from "../interfaces";
import { ADMIN_SECTIONS } from "@containers/Admin/constants";
import { usePathname } from "next/navigation";
import { APP_ROUTES } from "@modules/app/constants";
import { useMemo } from "react";

export default function useAside() {
  const path = usePathname();

  console.log(path);

  const active: ADMIN_SECTIONS = useMemo(() => {
    const sect = path.split("/").at(-1) as string;

    if (sect === "clothes") {
      return ADMIN_SECTIONS.CLOTHE;
    } else if (sect === "orders") {
      return ADMIN_SECTIONS.ORDERS;
    } else {
      return ADMIN_SECTIONS.CLOTHE;
    }
  }, [path]);

  const sections: Array<AsideSection> = [
    {
      icon: Clothe,
      title: "Ropa",
      section: ADMIN_SECTIONS.CLOTHE,
      url: APP_ROUTES.ADMIN.CLOTHES,
    },
    {
      icon: Bag,
      title: "Peticiones",
      section: ADMIN_SECTIONS.ORDERS,
      url: APP_ROUTES.ADMIN.ORDERS,
    },
  ];

  return { sections, active };
}
