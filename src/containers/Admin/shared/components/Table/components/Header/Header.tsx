import React from "react";

interface Props {
  header: string;
  actions: React.ReactNode;
}

export default function Header({ header, actions }: Props) {
  return (
    <header className="flex w-full items-center justify-between mb-4">
      <h1 className="font-fontMedium text-xl">{header}</h1>
      {actions}
    </header>
  );
}
