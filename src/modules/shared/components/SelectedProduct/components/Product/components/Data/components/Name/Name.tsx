import { ContentLoader } from "@modules/shared/components";
import { Fragment } from "react";

interface Props {
  name: string;
  loading: boolean;
}

export default function Name({ name, loading }: Props) {
  return (
    <Fragment>
      {loading ? (
        <ContentLoader height={60} className="mb-4" />
      ) : (
        <h1 className="font-fontSemiBold text-3xl text-left mb-4 esm:mb-2.5 esm:text-2xl">
          {name}
        </h1>
      )}
    </Fragment>
  );
}
