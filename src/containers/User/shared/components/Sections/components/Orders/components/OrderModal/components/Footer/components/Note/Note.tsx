import { Fragment } from "react";

interface Props {
  note: string;
}

export default function Note({ note }: Props) {
  return (
    <div className="md:order-1 order-2">
      {note && (
        <Fragment>
          <h2 className="font-fontMedium text-lg mb-1">Nota</h2>
          <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
            {note}
          </p>
        </Fragment>
      )}
    </div>
  );
}
