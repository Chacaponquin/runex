import { Body, Head, Header } from "./components";
import { TableData } from "./interfaces";

interface Props {
  header: string;
  data: TableData;
}

export default function Table({ header, data }: Props) {
  return (
    <div className="bg-white px-7 py-4 rounded-xl">
      <Header header={header} />

      <table className="table-auto w-full">
        <Head columns={data.columns} />
        <Body data={data.body} />
      </table>
    </div>
  );
}
