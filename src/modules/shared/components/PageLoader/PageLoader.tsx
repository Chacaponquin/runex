import { Loader } from "@modules/app/components";
import { Fragment } from "react";

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

export default function PageLoader({ loading, children }: Props) {
  return (
    <Fragment>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader size={60} />
        </div>
      ) : (
        children
      )}
    </Fragment>
  );
}
