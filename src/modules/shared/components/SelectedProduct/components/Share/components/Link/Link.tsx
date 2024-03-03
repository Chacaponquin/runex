import { Check } from "@modules/app/modules/icon/components";
import React from "react";

interface Props {
  link: string;
  handleCopy(): void;
  copied: boolean;
}

export default function Link({ link, handleCopy, copied }: Props) {
  return (
    <section className="flex flex-col w-full">
      <p className="text-base text-gray-500 mb-1">or copy link</p>

      <div className="flex rounded bg-gray-50 px-5 py-3 gap-x-5 w-full">
        <input
          readOnly={true}
          type="text"
          value={link}
          className="bg-transparent text-light-gray-400 w-full"
        />

        <button className="stroke-green-500" onClick={handleCopy}>
          {copied ? (
            <i>
              <Check size={22} />
            </i>
          ) : (
            <p className="text-base">Copiar</p>
          )}
        </button>
      </div>
    </section>
  );
}
