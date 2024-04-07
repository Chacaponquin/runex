import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  icon: React.FC<IconProps>;
  className?: string;
  disabled: boolean;
}

export default function LinkButton({ icon, link, className, disabled }: Props) {
  return (
    <button
      className="hover:stroke-blue-500 transition-all duration-200"
      disabled={disabled}
    >
      <Link href={link} className={clsx("flex items-center", className)}>
        {icon({ size: 22 })}
      </Link>
    </button>
  );
}
