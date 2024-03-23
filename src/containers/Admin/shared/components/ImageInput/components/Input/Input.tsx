import { Upload } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { createRef } from "react";

interface Props {
  handleChangeImages(e: FileList): void;
}

export default function Input({ handleChangeImages }: Props) {
  const inputRef = createRef<HTMLInputElement>();

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      handleChangeImages(e.target.files);
    }
  }

  const CLASS = clsx(
    "flex flex-col items-center justify-center",
    "border-[3px] border-gray-300 border-dashed",
    "h-[300px]",
    "mb-4",
    "cursor-pointer",
    "hover:bg-blue-50",
    "rounded"
  );

  return (
    <div className={CLASS} onClick={handleClick}>
      <input
        type="file"
        ref={inputRef}
        name="product-image"
        className="hidden"
        accept="image/jpeg, image/png"
        multiple
        onChange={handleChange}
      />

      <i className="stroke-black fill-black mb-4">
        <Upload size={48} />
      </i>

      <h1 className="text-lg text-center">
        Arrastra las imágenes o{" "}
        <span className="underline underline-offset-2 text-blue-500">
          navega
        </span>
      </h1>
    </div>
  );
}
