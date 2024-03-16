import { Upload } from "@modules/app/modules/icon/components";
import React from "react";

export default function ImageInput() {
  return (
    <div className="">
      <div className="stroke-black fill-black">
        <i>
          <Upload size={32} />
        </i>

        <h1>
          Arrastra las imágenes o <button>navega</button>
        </h1>
      </div>
    </div>
  );
}
