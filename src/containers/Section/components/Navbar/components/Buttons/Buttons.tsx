import { Cart, Favorite, User } from "@modules/app/modules/icon/components";
import React from "react";

export default function Buttons() {
  return (
    <section className="flex gap-x-7 items-center stroke-black">
      <button>
        <User size={24} />
      </button>

      <button>
        <Favorite size={24} />
      </button>

      <button>
        <Cart size={24} />
      </button>
    </section>
  );
}
