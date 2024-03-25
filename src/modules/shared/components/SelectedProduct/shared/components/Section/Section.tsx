import React from "react";

interface Props {
  selected: string | number;
  children: React.ReactNode;
  text: string;
}

export default function Section({ text, selected, children }: Props) {
  return (
    <section className="flex gap-x-6 w-full items-center">
      <div className="flex items-center gap-x-3">
        <p className="font-fontMedium text-lg">{text}</p>
        <span className="text-gray-500 text-lg hidden">{selected}</span>
      </div>

      {children}
    </section>
  );
}
