import { APP_ROUTES } from "@modules/app/constants";
import { useCart } from "@modules/cart/hooks";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  const { cart } = useCart();
  const disabled = cart.length === 0;

  const CLASS = clsx(
    "w-full",
    "bg-dark-950",
    "px-4 py-2",
    "text-center",
    "transition-all duration-200",
    "rounded",
    "font-fontMedium",
    "text-lg",
    "text-white",

    { "opacity-50": disabled, "hover:opacity-70": !disabled }
  );

  return (
    <footer className="pt-2">
      <Link href={APP_ROUTES.CHECKOUT}>
        <button disabled={disabled} className={CLASS}>
          Comprar
        </button>
      </Link>
    </footer>
  );
}
