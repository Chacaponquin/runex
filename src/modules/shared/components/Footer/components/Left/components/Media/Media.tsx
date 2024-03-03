import { IconProps } from "@modules/app/modules/icon/interfaces";
import React from "react";

interface Props {
  content: string;
  icon: React.FC<IconProps>;
}

export default function Media({ content, icon }: Props) {
  return (
    <div className="flex gap-x-5 stroke-white items-center">
      <span className="flex items-center justify-center p-2 bg-white stroke-black rounded-full">
        {icon({ size: 20 })}
      </span>

      <span className="text-base">{content}</span>
    </div>
  );
}
