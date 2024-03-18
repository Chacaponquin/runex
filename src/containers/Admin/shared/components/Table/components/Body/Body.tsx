import { TableElement } from "../../interfaces";
import { Td } from "./components";

interface Props {
  data: Array<Array<TableElement>>;
}

export default function Body({ data }: Props) {
  return (
    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          {d.map((el, j) => (
            <Td key={j} isFirst={j === 0}>
              {el}
            </Td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
