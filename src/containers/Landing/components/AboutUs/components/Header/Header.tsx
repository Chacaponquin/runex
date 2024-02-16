import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center w-full mb-5 text-center esm:text-left esm:items-start">
      <h1 className="text-5xl font-fontSemiBold mb-6 esm:text-4xl esm:mb-3.5">
        Why you picking us
      </h1>

      <p className="text-gray-500 max-w-[600px] text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugit
        dolores temporibus ullam facere facilis labore voluptatibus eos omnis
        natus impedit, sequi itaque, animi officiis?
      </p>
    </header>
  );
}
