import { ExternalLink } from "@modules/app/components";
import { IconProps } from "@modules/app/modules/icon/interfaces";
import clsx from "clsx";
import React from "react";

interface Props {
  color: string;
  name: string;
  icon: React.FC<IconProps>;
  link: string;
}

export default function Button({ color, icon, link }: Props) {
  const CLASS = clsx(
    "stroke-white",
    "transition-all duration-200",
    "rounded-full",
    "p-3",
    "hover:opacity-70"
  );

  return (
    <ExternalLink route={link}>
      <button className={CLASS} style={{ backgroundColor: color }}>
        {icon({ size: 24 })}
      </button>
    </ExternalLink>
  );
}
