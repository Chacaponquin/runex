import { ProductLoader } from "@modules/product/components";
import { Fragment } from "react";

export default function Loader() {
  return (
    <Fragment>
      {Array.from({ length: 4 }).map((_, index) => (
        <ProductLoader key={index} />
      ))}
    </Fragment>
  );
}
