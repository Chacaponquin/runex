import { Body, Empty, Head, Header } from "./components";
import { TableData } from "./interfaces";

interface Props {
  header: string;
  data: TableData;
  actions: React.ReactNode;
  loading: boolean;
  handleNext(): void;
}

export default function Table({
  header,
  data,
  actions,
  loading,
  handleNext,
}: Props) {
  const empty = data.body.length === 0;

  return (
    <div className="bg-white lg:px-8 px-6 py-5 rounded shadow-lg w-full">
      <Header header={header} actions={actions} />

      <div className="flex w-full overflow-auto max-h-[600px]">
        <table className="table-auto w-full border-2 border-gray-100">
          <Head columns={data.columns} />

          {!empty && (
            <Body
              data={data.body}
              loading={loading}
              columnsSize={data.columns.length}
              handleNext={handleNext}
            />
          )}
        </table>
      </div>

      {empty && <Empty />}
    </div>
  );
}
