import React from "react";
import { FooterContact } from "../../interfaces";
import { Media } from "./components";

interface Props {
  contacts: Array<FooterContact>;
}

export default function Left({ contacts }: Props) {
  return (
    <section className="lg:items-center flex flex-col">
      <div className="flex flex-col lg:text-center">
        <h1 className="uppercase text-xl font-fontSemiBold mb-2">
          How can we help?
        </h1>

        <p className="text-base mb-5 text-gray-100 lg:max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo
          ut aliquid tempore unde quia voluptas minus quo repellat aut!
        </p>
      </div>

      <div className="lg:flex gap-y-3 gap-x-10 lg:flex-col grid md:grid-cols-2 grid-cols-1">
        {contacts.map((c, index) => (
          <Media key={index} content={c.content} icon={c.icon} />
        ))}
      </div>
    </section>
  );
}
