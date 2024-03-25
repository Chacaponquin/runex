import React from "react";
import { Body, Head, Header } from "./components";
import { TableData } from "./interfaces";

interface Props {
  header: string;
  data: TableData;
  actions: React.ReactNode;
  loading: boolean;
}

export default function Table({ header, data, actions }: Props) {
  return (
    <div className="bg-white lg:px-8 px-5 py-5 rounded-lg shadow-lg overflow-x-auto w-full">
      <Header header={header} actions={actions} />

      <table className="table-auto w-full border-2 border-gray-100">
        <Head columns={data.columns} />
        <Body data={data.body} />
      </table>
    </div>
  );
}
