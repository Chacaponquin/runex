import React from "react";
import { FooterContact } from "../../interfaces";
import { Media } from "./components";

interface Props {
  contacts: Array<FooterContact>;
}

export default function Left({ contacts }: Props) {
  return (
    <section className="text-center items-center flex flex-col">
      <div className="flex flex-col">
        <h1 className="uppercase text-2xl font-fontSemiBold mb-2">
          How can we help?
        </h1>

        <p className="text-base mb-5 text-gray-100 max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo
          ut aliquid tempore unde quia voluptas minus quo repellat aut!
        </p>
      </div>

      <div className="flex gap-y-2 flex-col">
        {contacts.map((c, index) => (
          <Media key={index} content={c.content} icon={c.icon} />
        ))}
      </div>
    </section>
  );
}
