import { IconProps } from "@modules/app/modules/icon/interfaces";
import React from "react";

interface Props {
  title: string;
  icon: React.FC<IconProps>;
  content: string;
}

export default function Card({ content, icon, title }: Props) {
  return (
    <article className="flex gap-x-5 items-center">
      <section className="stroke-white bg-blue-500 flex items-center justify-center rounded-full min-w-[40px] min-h-[40px]">
        {icon({ size: 22 })}
      </section>

      <section className="flex flex-col">
        <h2 className="uppercase font-fontSemiBold text-base">{title}</h2>
        <p className="text-sm"> {content}</p>
      </section>
    </article>
  );
}
