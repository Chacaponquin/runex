import React from "react";
import { ContactInfo } from "../../../../interfaces";

interface Props {
  contacts: Array<ContactInfo>;
}

export default function Footer({ contacts }: Props) {
  return (
    <footer className="flex flex-col gap-y-5">
      {contacts.map((contact, index) => (
        <div key={index} className="flex gap-x-5 stroke-white">
          {contact.icon({ size: 28 })}
          <p className="text-xl">{contact.content}</p>
        </div>
      ))}
    </footer>
  );
}
