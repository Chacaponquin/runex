"use client";

import { useScreen } from "@modules/shared/hooks";
import { Button } from "./components";
import { SCREEN_SIZES } from "@modules/app/constants";

export default function NotFound() {
  const { condition } = useScreen(SCREEN_SIZES.LG);

  return (
    <div
      className="h-svh w-full flex justify-center pt-32 px-5 bg-no-repeat bg-cover"
      style={{
        backgroundImage: condition ? `url('/backgrounds/404.svg')` : undefined,
      }}
    >
      <main className="flex flex-col items-center w-full max-w-[600px]">
        <h1 className="font-fontBold text-[12rem] esm:text-9xl text-black esm:mb-4">
          404
        </h1>

        <p className="text-2xl text-center text-gray-600 mb-9 -mt-7 esm:mt-0">
          Opps!!! Este recurso no existe
        </p>

        <Button />
      </main>
    </div>
  );
}
