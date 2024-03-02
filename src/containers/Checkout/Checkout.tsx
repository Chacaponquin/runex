"use client";

import { Header, Methods, PersonalInfo, Adventages } from "./components";

export default function Checkout() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      <main className="flex flex-col w-full">
        <Methods />
        <PersonalInfo />
        <Adventages />
      </main>
    </div>
  );
}
