import { TableElement } from "../../interfaces";
import { Loader, Td } from "./components";

interface Props {
  data: Array<Array<TableElement>>;
  loading: boolean;
  columnsSize: number;
}

export default function Body({ data, loading, columnsSize }: Props) {
  return (
    <tbody>
      {!loading &&
        data.map((d, i) => (
          <tr className="border-b-[2px] border-gray-100" key={i}>
            {d.map((el, j) => (
              <Td key={j} isFirst={j === 0}>
                {el}
              </Td>
            ))}
          </tr>
        ))}

      {loading && <Loader size={columnsSize} />}
    </tbody>
  );
}
