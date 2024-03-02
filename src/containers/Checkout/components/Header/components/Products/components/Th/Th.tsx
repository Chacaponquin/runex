import React from "react";

interface Props {
  text: string;
}

export default function Th({ text }: Props) {
  return (
    <th className="text-center font-normal font-fontMedium py-3.5 text-base px-4">
      {text}
    </th>
  );
}
