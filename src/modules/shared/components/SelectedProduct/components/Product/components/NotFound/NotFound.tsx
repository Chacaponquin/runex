import { APP_IMAGES } from "@modules/app/constants";
import { Button } from "@modules/app/modules/ui/components";
import { useSelectProduct } from "@modules/product/hooks";
import Image from "next/image";
import React from "react";

export default function NotFound() {
  const { handleDeleteSelectedProduct: handleClose } = useSelectProduct();

  return (
    <div className="flex lg:flex-row gap-x-12 flex-col lg:items-start items-center w-full">
      <Image
        src={APP_IMAGES.EMPTY.src}
        alt={APP_IMAGES.EMPTY.alt}
        width={1000}
        height={1000}
        className="object-cover w-full sm:max-w-[450px] max-w-[370px]"
      />

      <div className="lg:pt-24 pb-10">
        <div className="text-left sm:mb-6 mb-4 flex flex-col gap-y-1">
          <span className="text-blue-500 font-fontSemiBold lg:text-7xl sm:text-6xl text-5xl">
            Oops,
          </span>
          <p className="font-fontSemiBold lg:text-6xl sm:text-5xl text-4xl">
            este producto no existe
          </p>
        </div>

        <p className="text-lg text-gray-500 mb-7 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          praesentium magni accusamus in ut dolores?
        </p>

        <Button
          rounded="full"
          color="primary"
          text="Cerrar"
          size="2xl"
          disabled={false}
          handleClick={handleClose}
        />
      </div>
    </div>
  );
}
