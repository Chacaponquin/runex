"use client";

import { createRef, useEffect } from "react";
import { TableElement } from "../../interfaces";
import { Loader, Td } from "./components";
import { useOnScreen } from "@modules/shared/hooks";

interface Props {
  data: Array<Array<TableElement>>;
  loading: boolean;
  columnsSize: number;
  handleNext(): void;
}

export default function Body({
  data,
  loading,
  columnsSize,
  handleNext,
}: Props) {
  const ref = createRef<HTMLTableRowElement>();

  const { intersecting } = useOnScreen(ref);

  useEffect(() => {
    if (intersecting) {
      handleNext();
    }
  }, [intersecting]);

  return (
    <tbody>
      {data.map((d, i) => (
        <tr
          className="border-b-[2px] border-gray-100"
          key={i}
          ref={i === data.length - 1 ? ref : undefined}
        >
          {d.map((el, j) => (
            <Td key={j} isFirst={j === 0} isLast={j === d.length - 1}>
              {el}
            </Td>
          ))}
        </tr>
      ))}

      {loading && <Loader size={columnsSize} />}
    </tbody>
  );
}
