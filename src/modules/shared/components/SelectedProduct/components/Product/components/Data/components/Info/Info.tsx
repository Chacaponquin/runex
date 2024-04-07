import { ContentLoader } from "@modules/shared/components";
import { Price, Provider } from "./components";
import { Fragment } from "react";

interface Props {
  loading: boolean;
  price: string;
  provider: string;
}

export default function Info({ loading, price, provider }: Props) {
  return (
    <div className="w-full flex gap-x-4 items-center mb-6">
      {loading ? (
        <div className="flex flex-col gap-y-3 w-full">
          <ContentLoader height={40} marginRight={100} />
          <ContentLoader height={40} marginRight={100} />
        </div>
      ) : (
        <Fragment>
          <Price price={price} />
          <Provider provider={provider} />
        </Fragment>
      )}
    </div>
  );
}
