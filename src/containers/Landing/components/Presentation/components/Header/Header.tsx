import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col uppercase">
      <div className="text-8xl [&>*]:font-fontExtraBold mb-5">
        <h1>A power that</h1>
        <h1>runs you</h1>
      </div>

      <p className="text-lg leading-7 max-w-[600px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sed
        excepturi obcaecati odit, eum amet?
      </p>

      <button>
        <p>Shop now</p>
      </button>
    </header>
  );
}
