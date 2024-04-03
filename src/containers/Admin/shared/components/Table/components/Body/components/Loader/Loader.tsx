import { ContentLoader } from "@modules/shared/components";
import { Fragment } from "react";

interface Props {
  size: number;
}

export default function Loader({ size }: Props) {
  return (
    <Fragment>
      {Array.from({ length: 20 }).map((_, index) => (
        <tr key={index}>
          <td colSpan={size} className="px-4 py-1">
            <ContentLoader height={35} />
          </td>
        </tr>
      ))}
    </Fragment>
  );
}
